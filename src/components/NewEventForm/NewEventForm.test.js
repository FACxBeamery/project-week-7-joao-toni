import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NewEventForm from "./NewEventForm";

afterEach(cleanup);

describe("Testing the Form component", () => {
	const { getByLabelText } = render(<NewEventForm />);
	const formFieldNode = getByLabelText("Title of the event*");
	// console.log(formFieldNode);

	// let badgeNode = getByText("in progress");
	test("test1", () => {
		fireEvent.change(formFieldNode, {
			target: { value: " " }
		});
		fireEvent.change(formFieldNode, {
			target: { value: " wdsdfsdf" }
		});

		expect(formFieldNode).toHaveClass("input");
		expect(formFieldNode).toHaveClass("greenborder");
	});
	test("test2", () => {
		fireEvent.change(formFieldNode, {
			target: { value: null }
		});

		expect(formFieldNode).toHaveClass("input");
		expect(formFieldNode).toHaveClass("redborder");
	});
});
