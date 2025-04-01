import Tag from "../components/tag";
import Product from "../components/product";
import Button from "../components/button";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { callAPI } from "../utils/api";
import { BASE_URL, CATEGORIES, PRODUCTS } from "../constants/url";

const Dashboard = () => {
	// Listen for authentication state changes
	const auth = getAuth();

	const navigate = useNavigate();

	const [categoriesList, setCategoriesList] = useState([]);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log("User details:", user);
			} else {
				navigate("/login");
			}
		});
	}, [auth, navigate]);

	const getCategories = async () => {
		const url = BASE_URL + CATEGORIES;

		await callAPI(url, null, "GET")
			.then((response) => {
				setCategoriesList(response);
			})
			.catch((error) => {
				console.error("Request failed:", error);
			});
	};

	const getProducts = async () => {
		const url = BASE_URL + PRODUCTS;

		await callAPI(url, null, "GET").then((response) => {
			setProducts(response);
		});
	};

	useEffect(() => {
		getCategories();
		getProducts();
	}, []);

	return (
		<div>
			{/* Tags */}
			<div className="flex items-center px-6 py-4 pt-4 gap-4 flex-wrap">
				{categoriesList.map((item) => (
					<Tag
						key={item._id}
						id={item._id}
						name={item.name}
						onClick={() => console.log(item)}
					>
						{item.name}
					</Tag>
				))}
				<Button type="secondary">Clear All</Button>
			</div>
			{/* Tags */}
			<div className="px-4 py-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
				{products.map((item) => (
					<Product {...item} key={item._id} />
				))}
			</div>
		</div>
	);
};

export default Dashboard;
