import React from "react";
import { render } from "@testing-library/react";
import Badge from "./Badge";

describe("Testing the Badge component", () => {
	test("Badge renders in progress as default", () => {
		const { getByText } = render(<Badge />);
		getByText("in progress");
	});
});
