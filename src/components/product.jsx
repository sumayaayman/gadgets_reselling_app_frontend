import { useState } from "react"; // Import useState for modal visibility state
import { formatDate } from "../utils/func";
import { useNavigate } from "react-router-dom";

const Product = ({
	images,
	name,
	price,
	description,
	location,
	date_added,
	contact_detail,
	category_id,
	sellerEmail,
}) => {
	const loggedInUserInfo = JSON.parse(localStorage.getItem("user"));
	const userEmail = loggedInUserInfo.email;
	// Modal visibility state
	const [isModalOpen, setIsModalOpen] = useState(false);
	const navigate = useNavigate();

	// Carousel state: Track the current image index
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// Functions to navigate carousel
	const handlePrevImage = () => {
		if (currentImageIndex > 0) {
			setCurrentImageIndex(currentImageIndex - 1);
		} else {
			setCurrentImageIndex(images.length - 1); // Go to last image if at the beginning
		}
	};

	const handleNextImage = () => {
		if (currentImageIndex < images.length - 1) {
			setCurrentImageIndex(currentImageIndex + 1);
		} else {
			setCurrentImageIndex(0); // Go to the first image if at the end
		}
	};

	// Function to toggle modal visibility
	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	const handleChat = () => {
		navigate("/chat", { state: { data: { sellerEmail } } });
	};

	return (
		<>
			{/* Product Card */}
			<div className="max-w-xs w-full rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow ease-in-out duration-300 transform">
				{/* Product Image */}
				<div className="w-full overflow-hidden rounded-t-lg">
					<img
						className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110"
						src={images?.[0]?.base64_data}
						alt="product-image"
					/>
				</div>
				{/* Product Details */}
				<div className="p-5 bg-white">
					<div className="flex items-center justify-between">
						<h5 className="text-xl font-semibold text-indigo-600">
							&#8377;{price}
						</h5>
						<span className="text-xs text-gray-500">
							{formatDate(date_added)}
						</span>
					</div>
					<h4 className="text-lg font-semibold text-gray-800 mt-2">{name}</h4>
					<p className="text-gray-600 text-sm mt-1">{description}</p>
					<div className="mt-4 text-xs text-gray-500">
						<p>{location}</p>
					</div>
					<div className="flex justify-between mt-4">
						<p
							onClick={toggleModal} // Open Modal on click
							className="text-indigo-500 hover:underline text-xs cursor-pointer"
						>
							View Details
						</p>
						{userEmail !== sellerEmail ? (
							<svg
								className="w-6 h-6 text-gray-500 dark:text-white cursor-pointer"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="none"
								viewBox="0 0 24 24"
								onClick={handleChat}
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
									d="M7 9h5m3 0h2M7 12h2m3 0h5M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.616a1 1 0 0 0-.67.257l-2.88 2.592A.5.5 0 0 1 8 18.477V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
								/>
							</svg>
						) : null}
					</div>
				</div>
			</div>

			{/* Modal */}
			{isModalOpen && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
					<div className="max-w-xl w-full bg-white rounded-lg shadow-lg relative">
						{/* Close Button */}
						<button
							onClick={toggleModal} // Close Modal on click
							className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-lg"
						>
							&times;
						</button>

						{/* Modal Content */}
						<div className="p-5">
							{/* Product Carousel */}
							<div className="relative overflow-hidden">
								{/* Image */}
								<img
									className="w-full h-72 object-contain rounded-lg"
									src={images[currentImageIndex]?.base64_data}
									alt={`product-image-${currentImageIndex}`}
								/>

								{/* Navigation Buttons */}
								<button
									onClick={handlePrevImage}
									className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition"
								>
									&lt;
								</button>
								<button
									onClick={handleNextImage}
									className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition"
								>
									&gt;
								</button>
							</div>

							{/* Product Details */}
							<div className="mt-5">
								<h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
								<p className="text-gray-600 mt-2">{description}</p>
								<div className="mt-4">
									<p className="text-lg text-gray-800 font-semibold">
										Price: &#8377;{price}
									</p>
									<p className="text-sm text-gray-500 mt-1">
										Category ID: {category_id}
									</p>
									<p className="text-sm text-gray-500 mt-1">
										Location: {location}
									</p>
									<p className="text-sm text-gray-500 mt-1">
										Added on: {formatDate(date_added)}
									</p>
									<p className="text-sm text-gray-500 mt-1">
										Contact: {contact_detail} {sellerEmail}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
export default Product;
