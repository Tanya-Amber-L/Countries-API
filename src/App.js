import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetailPage from "./routes/detail";
import HomePage from "./routes/home";

export default function App() {
	return (
		<Router>
			<div>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route
						path="/detail/:countryName"
						element={<DetailPage />}
					/>
				</Routes>
			</div>
		</Router>
	);
}
