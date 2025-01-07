import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/login.jsx";
import Dashboard from "./screens/dashboard.jsx";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
