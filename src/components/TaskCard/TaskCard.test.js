import React from "react";
import { render } from "@testing-library/react";
import TaskCard from "./TaskCard";

describe("Testing the TaskCard component", () => {
	test("TaskCard renders ", () => {
		render(<TaskCard />);
	});
});
