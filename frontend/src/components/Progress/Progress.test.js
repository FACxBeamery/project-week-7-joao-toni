import React from "react";
import { render } from "@testing-library/react";
import Progress from "./Progress";

describe("Testing the Progress component", () => {
    test("Progress renders in progress as default", () => {
        const { getByText } = render(<Progress tasksData={{}} />);
        getByText("Your Weekly Progress");
    });
});
