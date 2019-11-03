import React from "react";
import { render } from "@testing-library/react";
import UpNext from "./UpNext";

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

describe("Testing the UpNext component", () => {
	test("UpNext renders in progress as default", () => {
        const { getByText } = render(<UpNext 
            tasksData={tasksData}/>);
        getByText("Up Next")
	});
});