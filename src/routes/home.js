import { useState } from "react";
import { fetchAllCountries } from "../api/fetch";
import CountryCard from "../components/countryCard";
import RegionFilter from "../components/regionFilter";

export default function HomePage() {
	let [countries, setCountries] = useState([]);
	let [region, setRegion] = useState("all");

	if (region === "all") {
		fetchAllCountries(setCountries);
	}
	console.log(region);

	return (
		<>
			<RegionFilter setRegion={setRegion} />
			<CountryCard countries={countries} />
		</>
	);
}
