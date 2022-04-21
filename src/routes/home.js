import {useEffect, useState} from "react";
import {fetchAllCountries, fetchCountriesFromRegion} from "../api/fetch";
import CountryCard from "../components/countryCard";
import RegionFilter from "../components/regionFilter";
import SearchBar from "../components/searchBar";

export default function HomePage() {
    let [countries, setCountries] = useState([]);
    let [filteredCountries, setFilteredCountries] = useState([]);
    let [region, setRegion] = useState("all");
    let [inputText, setInputText] = useState("");

    useEffect(() => {
        if (region === "all") {
            fetchAllCountries(setCountries)
        } else {
            fetchCountriesFromRegion(region).then((data) => {
                setCountries(data);
            });
        }
    }, [region])

    const filterCountries = (countries) => {
        const filteredCountries = countries.filter((country) => {
            return country.name.common.toLowerCase().includes(inputText.toLowerCase())
        })
        setFilteredCountries(filteredCountries)
    };
    useEffect(() => {
        if (inputText !== "") {
            filterCountries(countries)
        }
    }, [inputText])

    return (<>
        <SearchBar setInputText={setInputText}/>
        <RegionFilter setRegion={setRegion} disabled={inputText === "" ? false : true}/>
        <CountryCard countries={inputText === "" ? countries : filteredCountries}/>
    </>);
}