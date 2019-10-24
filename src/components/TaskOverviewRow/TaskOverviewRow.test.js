import React from "react";
import { render } from "@testing-library/react";
import TaskOverviewRow from "./TaskOverviewRow";

describe("Testing the TaskOverviewRow component", () => {
	test("TaskOverviewRow renders ", () => {
		render(<TaskOverviewRow />);
	});
});
