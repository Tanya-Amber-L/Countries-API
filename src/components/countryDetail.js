import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSoloCountry, getBorderCountries } from "../api/fetch";

export default function CountryDetail() {
	const [soloCountry, setSoloCountry] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const { countryName } = useParams();

	fetchSoloCountry(countryName).then((data) => {
		setSoloCountry(data[0]);
		setIsLoaded(true);
	});

	let showNativeNames = () => {
		const entries = Object.entries(soloCountry.name.nativeName);
		const nativeNames = [];
		entries.forEach((object) => {
			nativeNames.push(object[1].common);
		});
		return nativeNames.join(", ");
	};

	// let showBorderCountries = (soloCountry) => {
	// 	const borderCodes = soloCountry.borders;

	// 	async function fetchBorderCountries(code) {
	// 		const res = await fetch(
	// 			`https://restcountries.com/v3.1/alpha/${code}`
	// 		);
	// 		let data = await res.json();
	// 		return data[0].name.common;
	// 	}

	// 	Promise.all(borderCodes.map((code) => fetchBorderCountries(code))).then(
	// 		(res) => "Test" + res.join(", ")
	// 	);
	// };

	return (
		<div className="country-solo">
			{isLoaded ? (
				<>
					<img
						className="country-img"
						src={soloCountry.flags.png}
						alt={soloCountry.name.common + " flag"}
						width="100"
					/>
					<div className="country-content">
						<h4 className="country-name">
							{soloCountry.name.common}
						</h4>
						<div className="country-infos">
							<div>
								<p className="country-detail">
									<span className="country-detail-title">
										Native Name(s):
									</span>
									{showNativeNames()}
								</p>
								<p className="country-detail">
									<span className="country-detail-title">
										Population:
									</span>
									{soloCountry.population}
								</p>
								<p className="country-detail">
									<span className="country-detail-title">
										Region:
									</span>
									{soloCountry.region}
								</p>
								<p className="country-detail">
									<span className="country-detail-title">
										Sub Region:
									</span>
									{soloCountry.subregion}
								</p>
								<p className="country-detail">
									<span className="country-detail-title">
										Capital:
									</span>
									{soloCountry.capital}
								</p>
							</div>
							<div>
								<p className="country-detail">
									<span className="country-detail-title">
										Top Level Domain:
									</span>
									{soloCountry.tld}
								</p>
								<p className="country-detail">
									<span className="country-detail-title">
										Currencies:
									</span>
									{soloCountry.capital}
								</p>
								<p className="country-detail">
									<span className="country-detail-title">
										Language(s):
									</span>
									{Object.values(soloCountry.languages).join(
										", "
									)}
								</p>
							</div>
						</div>
						<div>
							<p>Border Countries: </p>
							{soloCountry.borders}
						</div>
					</div>
				</>
			) : null}
		</div>
	);
}
