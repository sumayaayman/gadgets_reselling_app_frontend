
const Product = ({ images, name, price, description, location, date_added, contact_detail, category_id }) => {
	return (
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
					<span className="text-xs text-gray-500">{date_added}</span>
				</div>

				<h4 className="text-lg font-semibold text-gray-800 mt-2">{name}</h4>
				<p className="text-gray-600 text-sm mt-1">{description}</p>

				<div className="mt-4 flex justify-between text-xs text-gray-500">
					<p>{location}</p>
					<a href={""} className="text-indigo-500 hover:underline">
						View Details
					</a>
				</div>
			</div>
		</div>
	);
};

export default Product;
