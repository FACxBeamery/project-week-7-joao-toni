import React from "react";
import { render } from "@testing-library/react";
import ProfileArea from "./ProfileArea";

describe("Testing the ProfileArea component", () => {
	test("ProfileArea renders ", () => {
		render(<ProfileArea />);
	});
});
