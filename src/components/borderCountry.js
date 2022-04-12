import data from "../data/countries.json";

export default function BorderCountry({ borderCodes }) {
	// console.log(borderCodes);
	if (!borderCodes) {
		return;
	}

	let borderCountries = [];

	borderCodes.forEach((code) => {
		for (let item of data) {
			if (item.code === code) {
				borderCountries.push(item.name);
				// console.log(item.name);
				// return <li>{item.name}</li>;
			}
		}
	});

	return (
		<ul className="border-list">
			{borderCountries.map((country) => {
				return (
					<li className="border-item" key={country}>
						{country}
					</li>
				);
			})}
		</ul>
	);
}
