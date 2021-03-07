import React from "react";
import { useAuth } from "./Auth/Auth.js";

const Msg = () => {
	const { user } = useAuth();

	return (
		<>
			{user.user ? (
				<span className="text-red-600 font-bold p-2 capitalize">
					Welcome Back {user.name}
				</span>
			) : null}
		</>
	);
};

export default Msg;
