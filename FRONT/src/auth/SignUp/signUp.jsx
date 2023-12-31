import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SignUpForm from "./SignUpForm";
import Connecting from "../../SmolComponents/Connecting";
import ServerError from "../../SmolComponents/ServerError";

export default function Signup() {
	const navigate = useNavigate();
	const [status, setStatus] = useState("connecting");

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get("/status");
				if (response.data.loggedIn) {
					navigate("/home");
				} else {
					setStatus("not-logged-in");
				}
			} catch (err) {
				if (err.code == "ERR_NETWORK") {
					setStatus("server-error");
				} else {
					console.error(err);
				}
			}
		})();
	}, []);

	return status == "connecting" ? (
		<Connecting />
	) : status == "not-logged-in" ? (
		<SignUpForm navigate={navigate} />
	) : status == "server-error" ? (
		<ServerError />
	) : (
		<h1>Unknown Error</h1>
	);
}
