import React from "react";
import { useAuth } from "./Auth/Auth.js";

const Logout = () => {
	const { user, signOut } = useAuth();

	return (
		<>
			{user.user ? (
				<button
					onClick={() => signOut(() => {})}
					className="bg-red-600 text-white border-2 rounded-md p-2 font-bold mt-3"
				>
					Log Out
				</button>
			) : null}
		</>
	);
};

export default Logout;
