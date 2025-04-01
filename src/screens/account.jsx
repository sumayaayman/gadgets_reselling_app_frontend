import React, { useState } from "react";

const Account = () => {
	const [isEditing, setIsEditing] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);

	const userInfo = JSON.parse(localStorage.getItem("user"));

	// Example user data
	const user = {
		productsSold: [
			{
				id: 1,
				name: "Drone A1",
				price: "₹25,000",
				description: "A high-end drone with amazing features.",
				location: "Coimbatore",
				datePosted: "1st Mar 2025",
			},
			{
				id: 2,
				name: "iPhone 13 Pro Max",
				price: "₹30,000",
				description: "Green, 256GB, 8GB RAM",
				location: "Coimbatore",
				datePosted: "15th Mar 2025",
			},
		],
	};

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleCloseEdit = () => {
		setIsEditing(false);
	};

	const handleViewProductDetails = (product) => {
		setSelectedProduct(product);
	};

	const handleCloseProductDetails = () => {
		setSelectedProduct(null);
	};

	return (
		<div className="container mx-auto p-6 space-y-8">
			{/* Account Info and Products Sold */}
			<div className="flex items-center">
						<div className="rounded-full bg-gray-200 w-12 h-12 mr-2 shadow">
							<img
								className="rounded-full"
								src={userInfo.photoUrl}
								alt="photo"
							/>
						</div>

						<div className="text-sm text-gray-600">
							<p className="text-xl">{userInfo.name}</p>
							<p>{userInfo.email}</p>
						</div>
					</div>

			<div className="grid grid-cols-1 gap-8">
				<div className="bg-gray-50 p-6 rounded-lg shadow-lg space-y-6">
					<h2 className="text-2xl font-semibold text-gray-800">
						Products Sold
					</h2>
					{user.productsSold.length > 0 ? (
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{user.productsSold.map((product) => (
								<div
									key={product.id}
									className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
								>
									<h4 className="text-lg font-semibold text-gray-800">
										{product.name}
									</h4>
									<p className="text-gray-500 text-sm">{product.price}</p>
									<p className="text-gray-500 text-sm">{product.location}</p>
									<button
										onClick={() => handleViewProductDetails(product)}
										className="text-indigo-600 hover:underline text-xs mt-2 block"
									>
										View Details
									</button>
								</div>
							))}
						</div>
					) : (
						<p className="text-gray-500">No products sold yet.</p>
					)}
				</div>
			</div>

			{/* Edit Profile Modal */}
			{isEditing && <EditProfileModal user={user} onClose={handleCloseEdit} />}

			{/* Product Details Modal */}
			{selectedProduct && (
				<ProductDetailsModal
					product={selectedProduct}
					onClose={handleCloseProductDetails}
				/>
			)}
		</div>
	);
};

export default Account;

const EditProfileModal = ({ user, onClose }) => {
	const [name, setName] = useState(user.name);
	const [email, setEmail] = useState(user.email);
	const [location, setLocation] = useState(user.location);

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle the profile update logic here
		console.log("Updated User Info:", { name, email, location });
		onClose(); // Close the modal
	};

	return (
		<div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
			<div className="bg-white p-6 rounded-lg shadow-lg w-96">
				<h3 className="text-xl font-semibold mb-4">Edit Profile</h3>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-sm font-medium mb-1">Name</label>
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="w-full px-4 py-2 border rounded-lg"
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block text-sm font-medium mb-1">Email</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full px-4 py-2 border rounded-lg"
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block text-sm font-medium mb-1">Location</label>
						<input
							type="text"
							value={location}
							onChange={(e) => setLocation(e.target.value)}
							className="w-full px-4 py-2 border rounded-lg"
							required
						/>
					</div>
					<div className="flex justify-end gap-4">
						<button
							type="button"
							onClick={onClose}
							className="px-4 py-2 bg-gray-200 rounded-lg"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
						>
							Save Changes
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

const ProductDetailsModal = ({ product, onClose }) => {
	return (
		<div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
			<div className="bg-white p-6 rounded-lg shadow-lg w-96">
				<h3 className="text-xl font-semibold mb-4">Product Details</h3>
				<div>
					<p>
						<strong>Name:</strong> {product.name}
					</p>
					<p>
						<strong>Price:</strong> {product.price}
					</p>
					<p>
						<strong>Description:</strong> {product.description}
					</p>
					<p>
						<strong>Location:</strong> {product.location}
					</p>
					<p>
						<strong>Date Posted:</strong> {product.datePosted}
					</p>
				</div>
				<div className="mt-4 flex justify-end">
					<button
						onClick={onClose}
						className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
					>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};
