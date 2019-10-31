import React, { useState, useEffect } from "react";

import Header from "../Header";
import Progress from "../Progress";
import UpNext from "../UpNext";
import styles from "./OverviewPage.module.css";

import TaskOverviewList from "../TaskOverviewList";

// TODO remove import after API implementation
import { dummyData } from "../../utils/dummyData";

const OverviewPage = ({ setView }) => {
	const [tasksData, setTasksData] = useState({});

	useEffect(() => {
		// TODO api implementation
		const data = dummyData;

		setTasksData(data);
	}, [setTasksData]);

	return (
		<main>
			<Header size={"large"} text={"Welcome to your first week, Paul"} />
			{/* <img
				className={styles.greetingimg}
				src="https://assets-ouch.icons8.com/preview/296/904d624f-3edc-40b7-8ff0-29fa5f3ef00b.png"
				alt=""
			/> */}
			<UpNext />
			<Progress tasksData={tasksData} />
			<TaskOverviewList tasksData={tasksData} />
		</main>
	);
};

export default OverviewPage;
