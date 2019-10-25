import React, { useState, useEffect } from "react";

import Header from "../Header";
import Progress from "../Progress";
import UpNext from "../UpNext";

import TaskOverviewList from "../TaskOverviewList";

const ViewPage = ({ setView }) => {
	const [tasksData, setTasksData] = useState({});
	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(() => {
		// TODO api implementation
		const data = {
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
				}
			],
			Wednesday: [],
			Thursday: [],
			Friday: []
		};

		setTasksData(data);
	}, [setTasksData]);

	return (
		<>
			<Header size={"large"} text={"Welcome to your first week, Paul"} />
			<UpNext />
			<Progress tasksData={tasksData} />
			<TaskOverviewList
				tasksData={tasksData}
				isExpanded={isExpanded}
				setIsExpanded={setIsExpanded}
			/>
		</>
	);
};

export default ViewPage;
