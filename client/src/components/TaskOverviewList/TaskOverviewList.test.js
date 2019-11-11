import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TaskOverviewList from "./TaskOverviewList";
import { getDayName } from "../../utils/getDayName";

afterEach(cleanup);

const tasksData = {
    Monday: [
        {
            id: 1,
            title: "Intro Task",
            description: "Meet the team!",
            time: "12:00",
            taskHost: {
                name: "John Doe",
                title: "Grad Manager"
            },
            progress: "inprogress"
        },
        {
            id: 2,
            title: "Meet Your Laptop!",
            description: "Unbox yo goodies",
            time: "17:00",
            taskHost: {
                name: "Grads",
                title: "Grad Team"
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
            taskHost: {
                name: "John Doe",
                title: "Grad Manager"
            },
            progress: "complete"
        },
        {
            id: 9,
            title: "Intro Task3",
            description: "Meet the team!",
            time: "12:00",
            taskHost: {
                name: "John Doe",
                title: "Grad Manager"
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
            taskHost: {
                name: "John Doe",
                title: "Grad Manager"
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
                setTasksData={input => input}
            />
        );

        expect(getByText("Intro Task")).toBeTruthy();

        const taskListHeader = getByText("Today's Overview");
        const badgeNode = getByText("complete");
        const btnNode = getByText("Re-open task");
        fireEvent.click(btnNode);

        expect(btnNode).toHaveTextContent("Mark as complete");
        expect(badgeNode).toHaveTextContent("in progress");

        const expandBtn = getByText("Expand Tasks");
        fireEvent.click(expandBtn);
        expect(expandBtn).toHaveTextContent("Collapse Tasks");

        expect(taskListHeader).not.toBeInTheDocument();

        expect(getByText("Monday")).toBeTruthy();
        expect(getByText("Tuesday")).toBeTruthy();
        expect(getByText("Wednesday")).toBeTruthy();
        expect(getByText("Thursday")).toBeTruthy();
        expect(getByText("Friday")).toBeTruthy();

        const allEmptyRowData = getAllByText("No tasks for today!");
        expect(allEmptyRowData).toHaveLength(2);

        const mondayTask2Title = getByText("Meet Your Laptop!");
        const mondayTask2DueTime = getByText("Due by: 17:00");
        const mondayTask2Desc = getByText("Unbox yo goodies");
        const mondayTask2WithName = getByText("Grads");
        const mondayTask2WithPos = getByText("Grad Team");

        const allTasksInProgress = getAllByText("Mark as complete");

        // Put all tasks to complete
        allTasksInProgress.forEach(completeBtn => {
            expect(completeBtn).toHaveTextContent("Mark as complete");
            fireEvent.click(completeBtn);
            expect(completeBtn).toHaveTextContent("Re-open task");
        });

        fireEvent.click(expandBtn);
        expect(expandBtn).toHaveTextContent("Expand Tasks");

        allEmptyRowData.forEach(emptyRow => {
            expect(emptyRow).not.toBeInTheDocument();
        });

        expect(mondayTask2Title).not.toBeInTheDocument();
        expect(mondayTask2DueTime).not.toBeInTheDocument();
        expect(mondayTask2Desc).not.toBeInTheDocument();
        expect(mondayTask2WithName).not.toBeInTheDocument();
        expect(mondayTask2WithPos).not.toBeInTheDocument();
    });
});
