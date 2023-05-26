import { Route, Routes } from "react-router-dom";
import Income from "@pages/Income";
import Groups from "@pages/Groups";
import Products from "@pages/Products";
import Users from "@pages/Users";
import Settings from "@pages/Settings";
import DefaultLayout from "@components/layout/DefaultLayout";

function App() {
	return (
		<DefaultLayout>
			<Routes>
				<Route path="/" element={<Income />} />
				<Route path="/groups" element={<Groups />} />
				<Route path="/products" element={<Products />} />
				<Route path="/users" element={<Users />} />
				<Route path="/settings" element={<Settings />} />
			</Routes>
		</DefaultLayout>
	);
}

export default App;
