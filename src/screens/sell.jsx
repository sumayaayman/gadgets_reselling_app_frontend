import React, { useState } from "react";

const Sell = () => {
	const [gadgetDetails, setGadgetDetails] = useState({
		name: "",
		price: "",
		description: "",
		category: "electronics",
		condition: "new",
		location: "",
		contact: "",
		images: [],
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setGadgetDetails({
			...gadgetDetails,
			[name]: value,
		});
	};

	const handleFileChange = (e) => {
		setGadgetDetails({
			...gadgetDetails,
			images: [...e.target.files],
		});
	};

	const handleSubmit = (e) => {
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

		// Handle the form submission logic here
		console.log("Gadget details submitted:", gadgetDetails);
	};

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
						<option value="electronics">Electronics</option>
						<option value="appliances">Appliances</option>
						<option value="accessories">Accessories</option>
					</select>
				</div>

				{/* Condition */}
				<div>
					<label
						htmlFor="condition"
						className="block text-gray-700 font-medium mb-2"
					>
						Condition
					</label>
					<select
						id="condition"
						name="condition"
						value={gadgetDetails.condition}
						onChange={handleInputChange}
						className="w-full p-3 border border-gray-300 rounded-lg"
					>
						<option value="new">New</option>
						<option value="used">Used</option>
						<option value="refurbished">Refurbished</option>
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
				</div>

				{/* Submit Button */}
				<div>
					<button
						type="submit"
						className="w-full p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition duration-200"
					>
						List My Gadget
					</button>
				</div>
			</form>
		</div>
	);
};

export default Sell;
