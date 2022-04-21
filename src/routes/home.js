import {useEffect, useState} from "react";
import {fetchAllCountries, fetchCountriesFromRegion} from "../api/fetch";
import CountryCard from "../components/countryCard";
import RegionFilter from "../components/regionFilter";
import SearchBar from "../components/searchBar";

export default function HomePage() {
    let [countries, setCountries] = useState([]);
    let [region, setRegion] = useState("all");
    const [inputText, setInputText] = useState("");

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
        setCountries(filteredCountries)
    };

    useEffect(() => {
        if (inputText !== "") {
            filterCountries(countries)
        }
        console.log(inputText)
    }, [filterCountries, inputText])

    return (<>
        <SearchBar setInputText={setInputText}/>
        <RegionFilter setRegion={setRegion}/>
        <CountryCard countries={countries}/>
    </>);
}