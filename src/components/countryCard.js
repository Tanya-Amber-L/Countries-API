import { useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllCountries } from "../api/fetch";

export default function CountryCard() {
	let [countries, setCountries] = useState([]);

	fetchAllCountries(setCountries);

	return (
		<div className="countries-list">
			{countries.map((country) => {
				let name = country.name.common;
				return (
					<Link to={`detail/${name}`} key={name}>
						<div className="country-summary">
							<img
								className="summary-img"
								src={country.flags.png}
								alt={name + " flag"}
								width="100"
							/>
							<div className="summary-infos">
								<h2 className="summary-title">{name}</h2>
								<p className="summary-detail">
									<span className="summary-detail-title">
										Population:
									</span>
									{country.population}
								</p>
								<p className="summary-detail">
									<span className="summary-detail-title">
										Region:
									</span>
									{country.region}
								</p>
								<p className="summary-detail">
									<span className="summary-detail-title">
										Capital:
									</span>
									{country.capital}
								</p>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
}
