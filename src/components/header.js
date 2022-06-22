import RegularMoon from "../assets/moon-regular.svg";

export default function Header() {
    return (
        <header>
            <h1>Where in the world?</h1>
            <div className="color-mode">
                <img src={RegularMoon} alt="regular moon icon" width={18} />
                Dark Mode
            </div>
        </header>
    );
}
