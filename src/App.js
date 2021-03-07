import React from "react";
import {
	HashRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import "./styles/main.css";
import Filters from "./components/Filters";
import Pokedex from "./components/Pokedex";
import Encounters from "./components/Encounters";
import Login from "./components/Login";
import RouteProtected from "./components/RouteProtected";
import Logout from "./components/Logout";
import Msg from "./components/Msg";
import { useAuth } from "./components/Auth/Auth.js";

function App() {
	const { user } = useAuth();

	return (
		<Router>
			<div className="App p-6 font-oswald">
				<div className="flex justify-between items-center mb-2">
					<Msg />
					<Logout />
				</div>
				<Switch>
					<RouteProtected path="/pokedex/pokemon/:id/encounters">
						<Encounters />
					</RouteProtected>
					<RouteProtected path="/pokedex/pokemon/:id">
						<Pokedex />
					</RouteProtected>
					<RouteProtected path="/pokedex">
						<Filters />
					</RouteProtected>
					<Route path="/">
						{user.user ? <Redirect to="/pokedex" /> : <Login />}
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
