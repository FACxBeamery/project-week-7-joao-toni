import React, { useState } from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TaskOverviewList, { getDayName } from "./TaskOverviewList";
import { dummyData } from "../../dummyData/tasksData";

afterEach(cleanup);

const tasksData = {
	Monday: [
		{
			id: 1,
			title: "Intro Task",
			description: "Meet the team!",
			time: "12:00",
			taskWith: {
				name: "Yob Yan",
				position: "Grad Manager"
			},
			progress: "inprogress"
		},
		{
			id: 2,
			title: "Meet Your Laptop!",
			description: "Unbox yo goodies",
			time: "17:00",
			taskWith: {
				name: "Grads",
				position: "Grad Team"
			},
			progress: "inprogress"
		}
	],
	Tuesday: [
		{
			id: 3,
			title: "Intro Task",
			description: "Meet the team!",
			time: "12:00",
			taskWith: {
				name: "Yob Yan",
				position: "Grad Manager"
			},
			progress: "complete"
		},
		{
			id: 9,
			title: "Intro Task3",
			description: "Meet the team!",
			time: "12:00",
			taskWith: {
				name: "Yob Yan",
				position: "Grad Manager"
			},
			progress: "inprogress"
		}
	],
	Wednesday: [
		{
			id: 4,
			title: "Beamery Product intro meeting",
			description: "Meet the product!",
			time: "12:00",
			taskWith: {
				name: "Yob Yan",
				position: "Grad Manager"
			},
			progress: "inprogress"
		}
	],
	Thursday: [],
	Friday: []
};

describe("Testing the TaskOverviewList component", () => {
	test("Current day index is mapped to week day string", () => {
		expect(getDayName(1)).toBe("Monday");
		expect(getDayName(2)).toBe("Tuesday");

		expect(getDayName()).toBe(undefined);
	});

	test("User expected todays tasks rendered in overview", () => {
		jest.spyOn(global.Date.prototype, "getDay").mockImplementationOnce(
			() => 2 // Tuesday
		);

		const { getByText, getAllByText } = render(
			<TaskOverviewList
				tasksData={tasksData}
				setTasksData={(input) => input}
			/>
		);

		const taskListHeader = getByText("Today's Overview");
		const taskTitle = getByText("Intro Task");
		const badgeNode = getByText("complete");
		const btnNode = getByText("Re-open task");
		fireEvent.click(btnNode);

		expect(btnNode).toHaveTextContent("Mark as complete");
		expect(badgeNode).toHaveTextContent("in progress");

		const expandBtn = getByText("Expand Tasks");
		fireEvent.click(expandBtn);
		expect(expandBtn).toHaveTextContent("Collapse Tasks");

		expect(taskListHeader).not.toBeInTheDocument();

		const rowTitleMondayNode = getByText("Monday");
		const rowTitleMTuedayNode = getByText("Tuesday");
		const rowTitleWednesdayNode = getByText("Wednesday");
		const rowTitleThursdayNode = getByText("Thursday");
		const rowTitleFridayNode = getByText("Friday");

		const allEmptyRowData = getAllByText("No tasks for today!");
		expect(allEmptyRowData).toHaveLength(2);

		const mondayTask2Title = getByText("Meet Your Laptop!");
		const mondayTask2DueTime = getByText("Due by: 17:00");
		const mondayTask2Desc = getByText("Unbox yo goodies");
		const mondayTask2WithName = getByText("Grads");
		const mondayTask2WithPos = getByText("Grad Team");

		const allTasksInProgress = getAllByText("Mark as complete");

		// Put all tasks to complete
		allTasksInProgress.forEach((completeBtn) => {
			expect(completeBtn).toHaveTextContent("Mark as complete");
			fireEvent.click(completeBtn);
			expect(completeBtn).toHaveTextContent("Re-open task");
		});

		fireEvent.click(expandBtn);
		expect(expandBtn).toHaveTextContent("Expand Tasks");

		allEmptyRowData.forEach((emptyRow) => {
			expect(emptyRow).not.toBeInTheDocument();
		});

		expect(mondayTask2Title).not.toBeInTheDocument();
		expect(mondayTask2DueTime).not.toBeInTheDocument();
		expect(mondayTask2Desc).not.toBeInTheDocument();
		expect(mondayTask2WithName).not.toBeInTheDocument();
		expect(mondayTask2WithPos).not.toBeInTheDocument();
	});
});
