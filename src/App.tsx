import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Income from "@pages/Income";
import Groups from "@pages/Groups";
import Products from "@pages/Products";
import Users from "@pages/Users";
import Settings from "@pages/Settings";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/income" element={<Income />} />
				<Route path="/groups" element={<Groups />} />
				<Route path="/products" element={<Products />} />
				<Route path="/users" element={<Users />} />
				<Route path="/settings" element={<Settings />} />
			</Routes>
		</Router>
	);
}

export default App;
