import { Routes, Route } from "react-router-dom";
import Home from "./Home/home.jsx";
import Login from "./Auth/Login/Login.jsx";
import Signup from "./Auth/SignUp/SignUp.jsx";
import NotFound from "./NotFound/notFound.jsx";
import "./Auth/auth.css";

export default function App() {
	return (
		<Routes>
			<Route index element={<Login />} />
			<Route path="signup" element={<Signup />} />
			<Route path="home/*" element={<Home />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
