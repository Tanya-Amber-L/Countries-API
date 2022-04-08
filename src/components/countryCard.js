export default function CountryCard({ countries }) {
	return (
		<div className="countries-list">
			{countries.map((country) => {
				return (
					<div className="country-summary">
						<img
							className="country-img"
							src={country.flags.png}
							alt={country.name.common + "flag"}
							width="100"
						/>
						<div className="country-infos">
							<h2 className="country-title">
								{country.name.common}
							</h2>
							<p className="country-detail">
								<span className="country-detail-title">
									Population:{" "}
								</span>
								{country.population}
							</p>
							<p className="country-detail">
								<span className="country-detail-title">
									Region:{" "}
								</span>
								{country.region}
							</p>
							<p className="country-detail">
								<span className="country-detail-title">
									Capital:{" "}
								</span>
								{country.capital}
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}
