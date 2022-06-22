import RegularMoon from "../assets/moon-regular.svg";
import FullMoon from "../assets/moon-solid.svg";

export default function Header({ toggleTheme }) {
    return (
        <header>
            <h1>Where in the world?</h1>
            <button className="color-mode" onClick={toggleTheme}>
                <img
                    src={
                        document
                            .getElementById("html")
                            .getAttribute("data-theme") === "light"
                            ? RegularMoon
                            : FullMoon
                    }
                    alt="regular moon icon"
                    width={18}
                />
                Dark Mode
            </button>
        </header>
    );
}
