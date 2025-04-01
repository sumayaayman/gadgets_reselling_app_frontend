import { useEffect, useState } from "react";
import {
	BASE_URL,
	CATEGORIES,
	PRODUCTS,
	UPLOAD_IMAGES,
} from "../constants/url";
import { callAPI, callImageAPI } from "../utils/api";
import { useNavigate } from "react-router-dom";

const Sell = () => {
	const [gadgetDetails, setGadgetDetails] = useState({
		name: "",
		price: "",
		description: "",
		category: "",
		condition: "new",
		location: "",
		contact: "",
		images: [],
	});

	const [categoriesList, setCategoriesList] = useState([]);
	const [isImageUpading, setIsImageUploading] = useState(false);
	const { navigate } = useNavigate();

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setGadgetDetails({
			...gadgetDetails,
			[name]: value,
		});
	};

	const handleFileChange = async (e) => {
		const chosenImages = e.target.files;
		setIsImageUploading(true);

		const url = BASE_URL + UPLOAD_IMAGES;
		const formData = new FormData();

		// Ensure chosenImages is an array of File objects
		if (!chosenImages || chosenImages.length < 3 || chosenImages.length > 12) {
			alert("Select images between 3 to 12!");
			return;
		}

		// Append each image to FormData
		for (let i = 0; i < chosenImages.length; i++) {
			formData.append("images", chosenImages[i]);
		}
		try {
			const response = await callImageAPI(url, formData);
			const { images } = response;
			setGadgetDetails({
				...gadgetDetails,
				images: [...images],
			});
		} catch {
			alert("Failed to upload images, Try again!");
		}
		setIsImageUploading(false);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (
			!gadgetDetails.name ||
			!gadgetDetails.price ||
			!gadgetDetails.description ||
			gadgetDetails.images.length === 0
		) {
			alert(
				"Please fill in all the required fields and upload at least one image."
			);
			return;
		}

		const { name, description, price, images, location, contact, category } =
			gadgetDetails;

		const payload = {
			name,
			description,
			price,
			category_id: category,
			location,
			contact_detail: contact,
			images,
		};
		const url = BASE_URL + PRODUCTS;
		await callAPI(url, payload, "POST")
			.then((response) => {
				alert("product added ", response);
				navigate("/");
			})
			.catch(() => {
				alert("Failed to add product, Try again!");
			});
	};

	const getCategoriesList = async () => {
		const url = BASE_URL + CATEGORIES;

		await callAPI(url, null, "GET")
			.then((response) => {
				setCategoriesList(response);
			})
			.catch((error) => {
				console.error("Request failed:", error);
			});
	};

	useEffect(() => {
		getCategoriesList();
	}, []);

	return (
		<div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
			<form onSubmit={handleSubmit} className="space-y-6">
				{/* Gadget Name */}
				<div>
					<label
						htmlFor="name"
						className="block text-gray-700 font-medium mb-2"
					>
						Gadget Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={gadgetDetails.name}
						onChange={handleInputChange}
						className="w-full p-3 border border-gray-300 rounded-lg"
						required
					/>
				</div>

				{/* Price */}
				<div>
					<label
						htmlFor="price"
						className="block text-gray-700 font-medium mb-2"
					>
						Price (₹)
					</label>
					<input
						type="number"
						id="price"
						name="price"
						value={gadgetDetails.price}
						onChange={handleInputChange}
						className="w-full p-3 border border-gray-300 rounded-lg"
						required
					/>
				</div>

				{/* Description */}
				<div>
					<label
						htmlFor="description"
						className="block text-gray-700 font-medium mb-2"
					>
						Description
					</label>
					<textarea
						id="description"
						name="description"
						value={gadgetDetails.description}
						onChange={handleInputChange}
						className="w-full p-3 border border-gray-300 rounded-lg"
						rows="4"
						required
					/>
				</div>

				{/* Category */}
				<div>
					<label
						htmlFor="category"
						className="block text-gray-700 font-medium mb-2"
					>
						Category
					</label>
					<select
						id="category"
						name="category"
						value={gadgetDetails.category}
						onChange={handleInputChange}
						className="w-full p-3 border border-gray-300 rounded-lg"
					>
						{categoriesList.map(({ _id, name }) => (
							<option key={_id} value={_id}>
								{name}
							</option>
						))}
					</select>
				</div>

				{/* Location */}
				<div>
					<label
						htmlFor="location"
						className="block text-gray-700 font-medium mb-2"
					>
						Location
					</label>
					<input
						type="text"
						id="location"
						name="location"
						value={gadgetDetails.location}
						onChange={handleInputChange}
						className="w-full p-3 border border-gray-300 rounded-lg"
						required
					/>
				</div>

				{/* Contact Details (Optional) */}
				<div>
					<label
						htmlFor="contact"
						className="block text-gray-700 font-medium mb-2"
					>
						Contact Details (Optional)
					</label>
					<input
						type="text"
						id="contact"
						name="contact"
						value={gadgetDetails.contact}
						onChange={handleInputChange}
						className="w-full p-3 border border-gray-300 rounded-lg"
					/>
				</div>

				{/* Upload Images */}
				<div>
					<label
						htmlFor="images"
						className="block text-gray-700 font-medium mb-2"
					>
						Upload Images
					</label>
					<input
						type="file"
						id="images"
						name="images"
						accept="image/*"
						onChange={handleFileChange}
						multiple
						className="w-full p-3 border border-gray-300 rounded-lg"
						required
					/>
					<div className="mt-1 text-sm text-gray-500">
					{isImageUpading
						? "Uploading images.. "
						: "Minimum 3 files, maximum 12 files"}
				</div>
				</div>

				

				{/* Submit Button */}
				<div className="flex justify-center">
					<button
						type="submit"
						className="w-auto px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-200"
					>
						Save
					</button>
				</div>
			</form>
		</div>
	);
};

export default Sell;
