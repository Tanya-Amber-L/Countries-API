export const fetchAllCountries = async (setCountries) => {
	try {
		const res = await fetch("https://restcountries.com/v3.1/all");
		const data = await res.json();
		setCountries(data);
	} catch (err) {
		console.error(err);
	}
};

export const fetchSoloCountry = async (countryName) => {
	try {
		const res = await fetch(
			`https://restcountries.com/v3.1/name/${countryName}`
		);
		const data = await res.json();
		return data;
	} catch (err) {
		console.error("Error:" + err);
	}
};

// export const getBorderCountries = (data) => {
// 	const borderCodes = data[0].borders;
// 	let borderCountries = [];
// 	borderCodes.forEach(async (code) => {
// 		try {
// 			const res = await fetch(
// 				`https://restcountries.com/v3.1/alpha/${code}`
// 			);
// 			const data = await res.json();
// 			borderCountries.push(data[0].name.common);
// 		} catch (err) {
// 			console.error("Error:" + err);
// 		}
// 	});
// 	return borderCountries;
// };
