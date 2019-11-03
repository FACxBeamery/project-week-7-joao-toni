import React from "react";
import { render } from "@testing-library/react";
import App from "./App";


describe("Testing the App component", () => {
	test("App renders in progress as default", () => {
        const { getByText } = render(<App 
           />);
        getByText("Sign in as admin")
	});
});