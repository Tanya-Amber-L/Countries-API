import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSoloCountry } from "../api/fetch";
import BorderCountry from "./borderCountry";

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
						<div className="country-borders">
							<p className="border-title">Border Countries: </p>
							{
								<BorderCountry
									borderCodes={soloCountry.borders}
								/>
							}
						</div>
					</div>
				</>
			) : null}
		</div>
	);
}
