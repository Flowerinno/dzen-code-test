import { Route, Routes } from "react-router-dom";
import Income from "@pages/Income";
import Groups from "@pages/Groups";
import Products from "@pages/Products";
import Users from "@pages/Users";
import Settings from "@pages/Settings";
import DefaultLayout from "@components/layout/DefaultLayout";
import Dialog from "@components/elements/Dialog/Dialog";

function App() {
	return (
		<DefaultLayout>
			<Dialog />
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
