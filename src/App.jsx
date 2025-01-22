import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "./screens/login.jsx";
import Home from "./screens/home.jsx";
import Account from "./screens/account.jsx";
import Header from "./components/header.jsx";

function App() {
	return (
		<div>
			<BrowserRouter>
			<Header />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/account" element={<Account />} />

					{/* <Route path="/login" element={<Login />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
