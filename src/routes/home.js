import { useState } from "react";
import { fetchAllCountries, fetchCountriesFromRegion } from "../api/fetch";
import CountryCard from "../components/countryCard";
import RegionFilter from "../components/regionFilter";

export default function HomePage() {
	let [countries, setCountries] = useState([]);
	let [region, setRegion] = useState("all");

	if (region === "all") {
		fetchAllCountries(setCountries);
	} else {
		fetchCountriesFromRegion(region).then((data) => {
			setCountries(data);
		});
	}

	return (
		<>
			<RegionFilter setRegion={setRegion} />
			<CountryCard countries={countries} />
		</>
	);
}
