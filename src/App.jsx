import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "./screens/login.jsx";
import Home from "./screens/home.jsx";
import Account from "./screens/account.jsx";
import Header from "./components/header.jsx";
import Chat from "./screens/chat.jsx";
import Sell from "./screens/sell.jsx";
import Login from "./screens/login.jsx";

function App() {
	return (
		<div>
			<BrowserRouter>
			<Header />

				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<Home />} />
					<Route path="/account" element={<Account />} />
					<Route path="/chat" element={<Chat />} />
					<Route path="/sell" element={<Sell />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
