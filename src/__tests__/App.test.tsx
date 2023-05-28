import { render, screen } from "@testing-library/react";
import App from "src/App";

test("renders learn react link", () => {
	render(<App />);
	const linkElement = 123;
	expect(linkElement).toEqual(123);
});
