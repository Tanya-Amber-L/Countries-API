import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetailPage from "./routes/detail";
import HomePage from "./routes/home";

export default function App() {
    const [theme, setTheme] = useState("light");
    const newTheme = theme === "dark" ? "light" : "dark";
    const toggleTheme = () => {
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    return (
        <Router>
            <div>
                <Routes>
                    <Route
                        path="/"
                        element={<HomePage toggleTheme={toggleTheme} />}
                    />
                    <Route
                        path="/detail/:countryName"
                        element={<DetailPage toggleTheme={toggleTheme} />}
                    />
                </Routes>
            </div>
        </Router>
    );
}
