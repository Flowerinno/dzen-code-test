import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Sidebar from "../components/layout/modules/Sidebar/Sidebar";
import { BrowserRouter } from "react-router-dom";

const mockStore = configureStore([]);

describe("Sidebar", () => {
	let store;
	let component;

	beforeEach(() => {
		store = mockStore({
			sidebar: {
				isOpen: true,
			},
		});

		component = render(
			<BrowserRouter>
				<Provider store={store}>
					<Sidebar />
				</Provider>
			</BrowserRouter>
		);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	test("renders the sidebar component when isOpen is true", () => {
		const { getByTestId } = component;
		expect(getByTestId("sidebarContainer")).toBeInTheDocument();
	});

	test("does not render the sidebar component when isOpen is false", () => {
		store = mockStore({
			sidebar: {
				isOpen: false,
			},
		});

		component.rerender(
			<Provider store={store}>
				<Sidebar />
			</Provider>
		);

		const { queryByTestId } = component;
		expect(queryByTestId("sidebarContainer")).toBeNull();
	});
});
