import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

describe("Testing the Button component", () => {
	test("Button renders in progress as default", () => {
		const { getByText } = render(<Button />);
		getByText("This is a button");
	});
});
