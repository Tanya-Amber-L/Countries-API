export default function SearchBar({ setInputText, disabled }) {
    return (
        <form className="search-bar">
            <input
                type="text"
                placeholder="Search for a country..."
                onChange={(e) => setInputText(e.target.value)}
                disabled={disabled}
            />
        </form>
    );
}
