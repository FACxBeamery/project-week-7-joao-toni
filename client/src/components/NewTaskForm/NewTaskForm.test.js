import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NewTaskForm from "./NewTaskForm";

afterEach(cleanup);

describe("Testing the Form component", () => {
    const { getByLabelText, getByText } = render(<NewTaskForm />);
    const taskTitleNode = getByLabelText("Title of the task*");
    const descriptionNode = getByLabelText("Description*");
    const hostNode = getByLabelText("Who's the host?*");
    const hostTitleNode = getByLabelText("What's their title?*");
    const buttonFormNode = getByText("Add new task");
    test("input borders should change from red to green border colour", () => {
        expect(taskTitleNode).toHaveClass("input");
        fireEvent.change(taskTitleNode, {
            target: { value: " " }
        });
        expect(taskTitleNode).toHaveClass("redborder");

        fireEvent.change(taskTitleNode, {
            target: { value: "sdfsdf" }
        });
        expect(taskTitleNode).toHaveClass("greenborder");
        expect(buttonFormNode).toHaveClass("inactive");
    });
    test("form fields should be filled with user input", () => {
        fireEvent.change(taskTitleNode, {
            target: { value: " " }
        });
        fireEvent.change(taskTitleNode, {
            target: { value: "aushdui " }
        });
        fireEvent.change(descriptionNode, {
            target: { value: " " }
        });
        fireEvent.change(descriptionNode, {
            target: { value: "aushdui " }
        });
        fireEvent.change(hostNode, {
            target: { value: " " }
        });
        fireEvent.change(hostNode, {
            target: { value: "aushdui " }
        });

        expect(taskTitleNode.value).toBe("aushdui ");
        expect(descriptionNode.value).toBe("aushdui ");
        expect(hostNode.value).toBe("aushdui ");
    });
});
