import React from "react";
import { render } from "@testing-library/react";
import TaskOverviewList from "./TaskOverviewList";
import { getDayName } from "./TaskOverviewList";

describe("Testing the TaskOverviewList component", () => {
	test("Current day index is mapped to week day string", () => {
		expect(getDayName(1)).toBe("Monday");
		expect(getDayName(2)).toBe("Tuesday");

		expect(getDayName()).toBe(undefined);
	});
});
