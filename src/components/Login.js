import React, { useState } from "react";
import { useAuth } from "./Auth/Auth.js";
import { useHistory } from "react-router-dom";

const Login = () => {
	const [pokeTrainer, setPokeTrainer] = useState("");

	const { signIn } = useAuth();
	const history = useHistory();

	const handleChange = (e) => {
		setPokeTrainer(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		signIn(() => {
			history.push("/pokedex");
		}, pokeTrainer);
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1 className="mb-6 text-center text-2xl text-red-400">
				REGISTER YOU USERNAME AND FIND YOUR FAVORITE POKEMON!
			</h1>
			<form onSubmit={handleSubmit}>
				<input
					className="border-1 border-gray-400 rounded-md p-2 mr-2 w-96 capitalize bg-gray-100"
					placeholder="Your Pokemon Trainer Name"
					value={pokeTrainer}
					onChange={handleChange}
				/>
				<div className="flex justify-center mt-6">
					<button className="border-2 rounded-md p-2 font-bold bg-red-600 text-white">
						Login
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
