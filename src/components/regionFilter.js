export default function RegionFilter({ setRegion, disabled }) {
    return (
        <form className="dropdown">
            <select
                name="region"
                onChange={(e) => setRegion(e.target.value)}
                disabled={disabled}
            >
                <option value="all">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </form>
    );
}
