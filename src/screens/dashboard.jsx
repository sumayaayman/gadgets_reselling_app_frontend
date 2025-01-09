import Header from "../components/header";
import Drone from "../assets/drone.jpeg";
import Tag from "../components/tag";
import Product from "../components/product";

const Dashboard = () => {
	const products = [
		{
			url: "",
			name: "OnePlus 12",
			price: "47000",
			description: "Flowy emerald grren 16GB/512GB",
			location: "Madiwala, Bangalore",
			datePosted: "Dec 24",
		},
		{
			url: "",
			name: "iPhone 15",
			price: "80000",
			description: "256GB, white",
			location: "Coimbatore",
			datePosted: "Dec 12",
		},
		{
			url: "",
			name: "OnePlus 12",
			price: "47000",
			description: "Flowy emerald grren 16GB/512GB",
			location: "Madiwala, Bangalore",
			datePosted: "Dec 24",
		},
		{
			url: "",
			name: "iPhone 15",
			price: "80000",
			description: "256GB, white",
			location: "Coimbatore",
			datePosted: "Dec 12",
		},
		{
			url: "",
			name: "OnePlus 12",
			price: "47000",
			description: "Flowy emerald grren 16GB/512GB",
			location: "Madiwala, Bangalore",
			datePosted: "Dec 24",
		},
		{
			url: "",
			name: "iPhone 15",
			price: "80000",
			description: "256GB, white",
			location: "Coimbatore",
			datePosted: "Dec 12",
		},
		{
			url: "",
			name: "OnePlus 12",
			price: "47000",
			description: "Flowy emerald grren 16GB/512GB",
			location: "Madiwala, Bangalore",
			datePosted: "Dec 24",
		},
		{
			url: "",
			name: "iPhone 15",
			price: "80000",
			description: "256GB, white",
			location: "Coimbatore",
			datePosted: "Dec 12",
		},
		{
			url: "",
			name: "OnePlus 12",
			price: "47000",
			description: "Flowy emerald grren 16GB/512GB",
			location: "Madiwala, Bangalore",
			datePosted: "Dec 24",
		},
		{
			url: "",
			name: "iPhone 15",
			price: "80000",
			description: "256GB, white",
			location: "Coimbatore",
			datePosted: "Dec 12",
		},
		{
			url: "",
			name: "OnePlus 12",
			price: "47000",
			description: "Flowy emerald grren 16GB/512GB",
			location: "Madiwala, Bangalore",
			datePosted: "Dec 24",
		},
		{
			url: "",
			name: "iPhone 15",
			price: "80000",
			description: "256GB, white",
			location: "Coimbatore",
			datePosted: "Dec 12",
		},
	];
	return (
		<div>
			<Header />
			{/* Tags */}
			<div className="flex items-center px-6 py-4 pt-8 gap-4 flex-wrap">
				<Tag>Phones</Tag>
				<Tag>Phone Accessories</Tag>
				<Tag>Laptops</Tag>
				<Tag>Laptop Accessories</Tag>
				<Tag>Camera</Tag>
				<Tag>Camera Accessories</Tag>
				<Tag>Drone</Tag>
			</div>
			{/* Tags */}
			<div className="p-4 flex gap-8 flex-wrap ">
				{products.map((item) => (
					<Product
						url={item.url}
						name={item.name}
						price={item.price}
						description={item.description}
						location={item.location}
						datePosted={item.datePosted}
					/>
				))}
			</div>
		</div>
	);
};

export default Dashboard;
