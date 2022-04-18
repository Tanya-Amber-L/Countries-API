import { useState } from "react";
import { fetchAllCountries, fetchCountriesFromRegion } from "../api/fetch";
import CountryCard from "../components/countryCard";
import RegionFilter from "../components/regionFilter";
import SearchBar from "../components/searchBar";

export default function HomePage() {
	let [countries, setCountries] = useState([]);
	let [region, setRegion] = useState("all");
	const [inputText, setInputText] = useState("");

	// let inputHandler = (e) => {
	// 	var lowerCase = e.target.value.toLowerCase();
	// 	setInputText(e.target.value.toLowerCase());
	// 	console.log(inputText);
	// 	console.log(e.target.value.toLowerCase());
	// };
	// console.log(inputText);

	if (region === "all") {
		fetchAllCountries(setCountries);
	} else {
		fetchCountriesFromRegion(region).then((data) => {
			setCountries(data);
		});
	}

	let filterCountries = () => {
		console.log(inputText);
		// countries.filter((country) => {
		// 	if (inputText === "") {
		// 		return country;
		// 	} else if (
		// 		country.name.common
		// 			.toLowerCase()
		// 			.includes(inputText.toLowerCase())
		// 	) {
		// 		return country;
		// 	}
		// });
		// console.log(countries);
	};

	filterCountries();

	return (
		<>
			<SearchBar setInputText={setInputText} />
			<RegionFilter setRegion={setRegion} />
			<CountryCard countries={countries} />
		</>
	);
}
