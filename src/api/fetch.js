export const fetchAllCountries = async (setCountries) => {
	try {
		const res = await fetch("https://restcountries.com/v3.1/all");
		const data = await res.json();
		setCountries(data);
	} catch (err) {
		console.error(err);
	}
};
