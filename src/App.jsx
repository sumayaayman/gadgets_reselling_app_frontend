import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/home.jsx";
import Account from "./screens/account.jsx";
import Header from "./components/header.jsx";
import Chat from "./screens/chat.jsx";
import Sell from "./screens/sell.jsx";
import Login from "./screens/login.jsx";
import { useState } from "react";

function App() {
	const [searchText, setSearchText] = useState([]);
	const handleSearch = (value) => {
		setSearchText(value);
	}

	return (
		<div>
			<BrowserRouter>
				<Header handleSearch={handleSearch} />
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<Home searchText={searchText} />} />
					<Route path="/account" element={<Account />} />
					<Route path="/chat" element={<Chat />} />
					<Route path="/sell" element={<Sell />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
