// import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { fetchAllCountries } from "./api/fetch";
import CountryCard from "./components/countryCard";
import CountryDetail from "./components/countryDetail";

export default function App() {
	// let [countries, setCountries] = useState([]);

	// fetchAllCountries(setCountries);

	return (
		<Router>
			<div>
				{/* <CountryCard countries={countries} /> */}
				<Routes>
					<Route path="/" element={<CountryCard />} />
					<Route
						path="/detail/:countryName"
						element={<CountryDetail />}
					/>
				</Routes>
			</div>
		</Router>
	);
}
