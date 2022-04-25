import { useEffect, useState } from "react";
import { fetchAllCountries, fetchCountriesFromRegion } from "../api/fetch";
import CountryCard from "../components/countryCard";
import RegionFilter from "../components/regionFilter";
import SearchBar from "../components/searchBar";

export default function HomePage() {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [region, setRegion] = useState("all");
    const [inputText, setInputText] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (region === "all") {
            fetchAllCountries(setCountries).then(() => setIsLoaded(true));
        } else {
            fetchCountriesFromRegion(region).then((data) => {
                setCountries(data);
                setIsLoaded(true);
            });
        }
    }, [region]);

    const filterCountries = (countries) => {
        const filteredCountries = countries.filter((country) => {
            return country.name.common
                .toLowerCase()
                .includes(inputText.toLowerCase());
        });
        setFilteredCountries(filteredCountries);
    };
    useEffect(() => {
        if (inputText !== "") {
            filterCountries(countries);
        }
    }, [inputText]);

    return (
        <>
            <div className="filters">
                <SearchBar
                    setInputText={setInputText}
                    disabled={region !== "all"}
                />
                <RegionFilter
                    setRegion={setRegion}
                    disabled={inputText !== ""}
                />
            </div>
            <CountryCard
                countries={inputText === "" ? countries : filteredCountries}
                isLoaded={isLoaded}
            />
        </>
    );
}
