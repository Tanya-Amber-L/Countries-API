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
						<div className="country-card">
							<img
								className="card-img"
								src={country.flags.png}
								alt={name + " flag"}
								width="100"
							/>
							<div className="card-infos">
								<h2 className="card-title">{name}</h2>
								<p className="card-detail">
									<span className="card-detail-title">
										Population:
									</span>
									{country.population}
								</p>
								<p className="card-detail">
									<span className="card-detail-title">
										Region:
									</span>
									{country.region}
								</p>
								<p className="card-detail">
									<span className="card-detail-title">
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
