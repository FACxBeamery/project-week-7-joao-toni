import React, { useState, useEffect } from "react";

import Header from "../Header";
import Progress from "../Progress";
import UpNext from "../UpNext";
import styles from "./OverviewPage.module.css";

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
		<main>
			<Header size={"large"} text={"Welcome to your first week, Paul"} />
			<img
				className={styles.greetingimg}
				src="https://assets-ouch.icons8.com/preview/296/904d624f-3edc-40b7-8ff0-29fa5f3ef00b.png"
				alt=""
			/>
			<UpNext />
			<Progress tasksData={tasksData} />
			<TaskOverviewList
				tasksData={tasksData}
				isExpanded={isExpanded}
				setIsExpanded={setIsExpanded}
			/>
		</main>
	);
};

export default ViewPage;
