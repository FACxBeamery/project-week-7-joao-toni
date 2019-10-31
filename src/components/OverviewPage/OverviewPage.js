import React, { useState, useEffect } from "react";

import Header from "../Header";
import UpNext from "../UpNext";
import Button from "../Button";
import styles from "./OverviewPage.module.css";

import TaskOverviewList from "../TaskOverviewList";

// TODO remove import after API implementation
import { tasksData } from "../../dummyData/tasksData";

const OverviewPage = ({ setView }) => {
	const [tasksData, setTasksData] = useState({});

	useEffect(() => {
		// TODO api implementation
		const data = tasksData;

		setTasksData(data);
	}, [setTasksData]);

	return (
		<>
			<nav>
				<Button
					onClick={(e) => setView("main")}
					category="accent"
					buttonText={"< Go back to main menu"}
				/>
			</nav>
			<main>
				<Header
					size={"large"}
					text={"Welcome to your first week, Paul"}
				/>
				{/* <img
				className={styles.greetingimg}
				src="https://assets-ouch.icons8.com/preview/296/904d624f-3edc-40b7-8ff0-29fa5f3ef00b.png"
				alt=""
			/> */}
				<div className={styles["top-content"]}>
					<UpNext tasksData={tasksData} />
				</div>
				<TaskOverviewList tasksData={tasksData} />
			</main>
		</>
	);
};

export default OverviewPage;
