import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductsHeader from "../components/layout/modules/Products/ProductsHeader";

describe("ProductsHeader", () => {
	test("selects value", () => {
		const { getByTestId } = render(
			<ProductsHeader
				count={10}
				activeType="Monitor"
				types={["All", "Electronics", "Monitor"]}
				selectType={jest.fn()}
			/>
		);

		const typeSelect = getByTestId("select");
		const optionValue = screen.getByText("Monitor");

		userEvent.click(typeSelect);
		userEvent.click(optionValue);

		expect(typeSelect).not.toBeUndefined();
		expect(optionValue).toBeInTheDocument();
	});
});
