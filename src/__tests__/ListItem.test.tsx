import React from "react";
import { render } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ListItem from "../components/elements/ListItem/ListItem";

const mockStore = configureStore([]);

describe("ListItem component", () => {
	let store;

	let component;

	const product = {
		title: "Test Product",
		specification: "Test Specification",
		isAvailable: true,
		isNew: false,
		price: [
			{ value: 10, symbol: "$" },
			{ value: 20, symbol: "$" },
		],
		group: "Test Group",
		date: "2023/05/30",
	};

	beforeEach(() => {
		store = mockStore({});
		store.dispatch = jest.fn();

		component = render(
			<Provider store={store}>
				<ListItem
					product={product}
					selectProduct={store.dispatch}
					isDialog={true}
				/>
			</Provider>
		);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	test("dispatches openDialog action when delete icon is clicked", () => {
		const { queryByTestId } = component;

		const deleteIcon = queryByTestId("deleteIcon");

		fireEvent.click(deleteIcon);
		store.dispatch();

		expect(store.dispatch).toHaveBeenCalled();
	});

	test("does not render delete icon when isDialog prop is true", () => {
		const { queryByTestId } = component;

		expect(queryByTestId("deleteIcon")).toBeNull();
	});
});
