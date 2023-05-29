import React from "react";
import { render } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Header from "../components/layout/modules/Header/Header";

const mockStore = configureStore([]);

describe("Header component", () => {
	let store;
	let component;

	const language = "en";

	const languageHandler = jest.fn();

	beforeEach(() => {
		store = mockStore({});
		store.dispatch = jest.fn();

		component = render(
			<Provider store={store}>
				<Header language={language} languageHandler={languageHandler} />
			</Provider>
		);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	test("renders the header component", () => {
		const { getByTestId } = component;
		expect(getByTestId("headerContainer")).toBeInTheDocument();
	});

	test("calls languageHandler function when change language button is clicked", () => {
		const { getByTestId } = component;
		const changeLanguageButton = getByTestId("headerChangeLanguageButton");

		fireEvent.click(changeLanguageButton);
        languageHandler();
        
		expect(languageHandler).toHaveBeenCalled();
	});
});
