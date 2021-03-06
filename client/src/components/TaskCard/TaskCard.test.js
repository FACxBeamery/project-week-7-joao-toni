import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TaskCard from "./TaskCard";

afterEach(cleanup);

const tasksData = {
    Monday: [
        {
            id: 1,
            title: "title 1",
            description: "meeting the important person",
            time: "12:00",
            taskHost: {
                name: "John Doe",
                title: "Grad Manager"
            },
            progress: "inprogress"
        }
    ],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: []
};

describe("Testing the TaskCard component", () => {
    const { getByText } = render(
        <TaskCard
            tasksData={tasksData}
            setTasksData={input => input}
            day={"Monday"}
            id={1}
            title={"title 1"}
            description={"meeting the important person"}
            time={"12:00"}
            taskHost={{
                name: "John Doe",
                title: "Grad Manager"
            }}
            progress={"inprogress"}
        />
    );
    const buttonNode = getByText("Mark as complete");
    let badgeNode = getByText("in progress");
    test("Badge component's text content toggles from `in progress` to `complete` after task has been marked as completed", () => {
        expect(badgeNode).toHaveTextContent("in progress");
        fireEvent.click(buttonNode);
        expect(badgeNode).toHaveTextContent("complete");
        expect(badgeNode).toHaveClass("complete");
    });
    test("Button component's text content toggles from `Mark as complete` to `Re-open task` after task has been marked as completed", () => {
        expect(buttonNode).toHaveTextContent("Re-open task");
        expect(buttonNode).toHaveClass("accent");
    });
});
