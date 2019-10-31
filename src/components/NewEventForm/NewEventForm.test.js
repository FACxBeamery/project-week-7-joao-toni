import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NewEventForm from "./NewEventForm";

afterEach(cleanup);

describe("Testing the Form component", () => {
	const { getByLabelText, getByText } = render(<NewEventForm />);
	const eventTitleNode = getByLabelText("Title of the event*");
	const descriptionNode = getByLabelText("Description*");
	const hostNode = getByLabelText("Who's the host?*");
	const dueDateNode = getByLabelText("Due date*");
	const buttonFormNode = getByText("Add new event");
	test("input borders should change from red to green border colour", () => {
		expect(eventTitleNode).toHaveClass("input");
		fireEvent.change(eventTitleNode, {
			target: { value: " " }
		});
		expect(eventTitleNode).toHaveClass("redborder");

		fireEvent.change(eventTitleNode, {
			target: { value: "sdfsdf" }
		});
		expect(eventTitleNode).toHaveClass("greenborder");
		expect(buttonFormNode).toHaveClass("inactive");
	});
	test("form fields should be filled with user input", () => {
		fireEvent.change(eventTitleNode, {
			target: { value: " " }
		});
		fireEvent.change(eventTitleNode, {
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
		fireEvent.change(dueDateNode, {
			target: { value: " " }
		});
		fireEvent.change(dueDateNode, {
			target: { value: "12:00" }
		});
		expect(eventTitleNode.value).toBe("aushdui ");
		expect(descriptionNode.value).toBe("aushdui ");
		expect(hostNode.value).toBe("aushdui ");
		expect(dueDateNode.value).toBe("12:00");
	});
});
