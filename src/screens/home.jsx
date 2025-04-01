import Tag from "../components/tag";
import Product from "../components/product";
import Button from "../components/button";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { callAPI } from "../utils/api";
import { BASE_URL, CATEGORIES, PRODUCTS } from "../constants/url";

const MIN_CATEGORIES_TO_SHOW = 9;

const Dashboard = () => {
	// Listen for authentication state changes
	const auth = getAuth();
	const navigate = useNavigate();
	const [categoriesList, setCategoriesList] = useState([]);
	const [products, setProducts] = useState([]);
	const [showAllCategories, setShowAllCategories] = useState(false); // Show all or less toggle
	const [visibleCategories, setVisibleCategories] = useState([]);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log("User details:", user);
				const { reloadUserInfo } = user;
				const { displayName, email, photoUrl } = reloadUserInfo;
				localStorage.setItem(
					"user",
					JSON.stringify({ name: displayName, email, photoUrl })
				);
				console.log("user info ", { name: displayName, email, photoUrl });
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
				response.slice(0, MIN_CATEGORIES_TO_SHOW);
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

	const handleShowAllCategories = () => {
		setShowAllCategories(!showAllCategories);
	};

	useEffect(() => {
		if (showAllCategories) {
			setVisibleCategories(categoriesList);
		} else {
			setVisibleCategories(categoriesList.slice(0, MIN_CATEGORIES_TO_SHOW));
		}
	}, [categoriesList, showAllCategories]);

	useEffect(() => {
		getCategories();
		getProducts();
	}, []);

	return (
		<div>
			{/* Tags Section */}
			<div className="flex grid-col-2 px-6 py-4">
				<div className="flex flex-col  w-4/5">
					<div className="flex items-center gap-4 flex-wrap">
						{visibleCategories.map((item) => (
							<Tag
								key={item._id}
								id={item._id}
								name={item.name}
								onClick={() => console.log(item)}
							>
								{item.name}
							</Tag>
						))}
					</div>
				</div>
				<div className="w-1/5 pl-6">
					<Button onClick={handleShowAllCategories}>
						{showAllCategories ? "Show Less" : "Show All"}
					</Button>
					<Button>Clear All</Button>
				</div>
			</div>

			{/* Products Section */}
			<div className="px-4 py-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
				{products.map((item) => (
					<Product {...item} key={item._id} />
				))}
			</div>
		</div>
	);
};

export default Dashboard;
