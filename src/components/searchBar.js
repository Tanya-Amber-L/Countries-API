export default function SearchBar({ setInputText }) {
	return (
		<form>
			<input
				type="text"
				placeholder="Search for a country..."
				onChange={(e) => setInputText(e.target.value)}
			/>
		</form>
	);
}
