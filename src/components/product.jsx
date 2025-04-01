import { useState } from "react"; // Import useState for modal visibility state
import { formatDate } from "../utils/func";

const Product = ({
    images,
    name,
    price,
    description,
    location,
    date_added,
    contact_detail,
    category_id,
}) => {
    // Modal visibility state
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                    {/* View Details Link */}
                    <p
                        onClick={toggleModal} // Open Modal on click
                        className="text-indigo-500 hover:underline text-xs mt-1 cursor-pointer"
                    >
                        View Details
                    </p>
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
                                    <p className="text-sm text-gray-500 mt-1">Location: {location}</p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Added on: {formatDate(date_added)}
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Contact: {contact_detail}
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
