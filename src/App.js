import React, { useState, useEffect } from "react";

import styles from "./App.module.css";

import Header from "./components/Header";
import Progress from "./components/Progress";

import TaskOverviewList from "./components/TaskOverviewList";

function App() {
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
					time: "12:00:00",
					taskWith: {
						name: "Yob Yan",
						position: "Grad Manager"
					},
					status: "inprogress"
				},
				{
					id: 2,
					title: "Meet Your Laptop!",
					description: "Unbox yo goodies",
					time: "17:00:00",
					taskWith: {
						name: "Grads",
						position: "Grad Team"
					},
					status: "inprogress"
				}
			],
			Tuesday: [
				{
					id: 3,
					title: "Intro Task",
					description: "Meet the team!",
					time: "12:00:00",
					taskWith: {
						name: "Yob Yan",
						position: "Grad Manager"
					},
					status: "inprogress"
				}
			]
		};

		setTasksData(data);
	}, [setTasksData]);

	return (
		<div className={styles.app}>
			<Header size={"large"} text={"Welcome to your first week, Paul"} />
			<Progress />
			<TaskOverviewList
				tasksData={tasksData}
				isExpanded={isExpanded}
				setIsExpanded={setIsExpanded}
			/>
		</div>
	);
}

export default App;
