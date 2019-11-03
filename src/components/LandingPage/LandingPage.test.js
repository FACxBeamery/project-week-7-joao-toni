import React from "react";
import { render } from "@testing-library/react";
import LandingPage from "./LandingPage";

describe("Testing the LandingPage component", () => {
	test("LandingPage renders in progress as default", () => {
        const { getByText } = render(<LandingPage 
            
           />);
        getByText("Hi 🤓")
	});
});