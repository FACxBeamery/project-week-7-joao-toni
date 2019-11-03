import React from "react";
import { render } from "@testing-library/react";
import ProgressWheel from "./ProgressWheel";

describe("Testing the ProgressWheel component", () => {
	test("ProgressWheel renders in progress as default", () => {
        const { getByText } = render(<ProgressWheel 
            strokeWidth={"32"}
				sqSize={"200"}
				percentage={25 || 0}/>);
	});
});