import Button from "../components/button";

import LoginBanner from "../assets/login-banner1.jpg";

import { loginWithGoogle } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const naviagte = useNavigate();
	const onClickLogin = async () => {
		const loginResponse = await loginWithGoogle();
		console.log(loginResponse);
		naviagte("/");
	};

	return (
		<div
			className="flex items-center justify-center w-screen h-screen fixed top-0 left-0 z-10"
			style={{
				backgroundImage: `url(${LoginBanner})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
			}}
		>
			<div className="bg-white shadow rounded p-6 w-[40%] text-center ">
				<h1 className="pb-6 text-2xl font-semibold">Gadget Reselling App</h1>
				<Button onClick={onClickLogin}>Login with Google</Button>
				<p>App version 1.0.0</p>
			</div>
		</div>
	);
};

export default Login;
