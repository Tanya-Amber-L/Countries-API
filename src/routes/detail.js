import CountryDetail from "../components/countryDetail";
import Header from "../components/header";

export default function DetailPage({ toggleTheme }) {
    return (
        <>
            <Header toggleTheme={toggleTheme} />
            <CountryDetail />
        </>
    );
}
