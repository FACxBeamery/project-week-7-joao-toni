
import React from "react";
import { render } from "@testing-library/react";
import AdminPage from "./AdminPage";

describe("Testing the AdminPage component", () => {
	test("AdminPage renders in progress as default", () => {
        const { getByText } = render(<AdminPage 
            
           />);
        getByText("Admin - settings")
	});
});