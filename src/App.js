import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TicketPage from "./pages/TicketPage";
import NavBar from "./components/NavBar";
import CategoriesContext from "./context";
import { useState } from "react";
const App = () => {
	const [categories, setCategories] = useState(null);
	const value = { categories, setCategories };
	return (
		<div className="app">
			<CategoriesContext.Provider value={value}>
				<BrowserRouter>
					<NavBar />
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/ticket" element={<TicketPage />} />
						<Route
							path="/ticket/:id"
							element={<TicketPage editmode={true} />}
						/>
					</Routes>
				</BrowserRouter>
			</CategoriesContext.Provider>
		</div>
	);
};

export default App;
