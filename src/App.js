import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { fetchAllCountries } from "./api/fetch";
import CountryCard from "./components/countryCard";

export default function App() {
	let [countries, setCountries] = useState([]);

	fetchAllCountries(setCountries);

	return (
		<Router>
			<div>
				<h1>Hello!</h1>
				{/* <CountryCard countries={countries} /> */}
				<Routes>
					<Route
						path="/"
						element={<CountryCard countries={countries} />}
					/>
				</Routes>
			</div>
		</Router>
	);
}
