import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSoloCountry } from "../api/fetch";

export default function CountryDetail() {
	const [soloCountry, setSoloCountry] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const { countryName } = useParams();

	fetchSoloCountry(countryName).then((data) => {
		setSoloCountry(data[0]);
		setIsLoaded(true);
	});

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
									{/* {Object.keys(
										soloCountry.name.nativeName
									).forEach((key) => console.log(key.common))} */}
									{/* {console.log(soloCountry.name.nativeName)} */}
									{/* {
									Object.values(
										soloCountry.name.nativeName
									).join(", ")
									
									} */}
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
						</div>
					</div>
				</>
			) : null}
		</div>
	);
}
