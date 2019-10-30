import React from "react";
import styles from "./TaskOverviewList.module.css";

import TaskOverviewRow from "./TaskOverviewRow";
import Button from "../Button";
import Header from "../Header";

export const getDayName = (id) => {
	const weekday = new Array(7);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";

	return weekday[id];
};

const TaskOverviewList = ({ tasksData, isExpanded = false, setIsExpanded }) => {
	//Functionality
	const handleClick = () => {
		setIsExpanded(!isExpanded);
	};

	// Components
	const expandListButton = (
		<Button
			buttonText="Expand Tasks"
			category="outlined"
			onClick={handleClick}
		/>
	);
	const shrinkListButton = (
		<Button
			buttonText="Collapse Tasks"
			category="outlined"
			onClick={handleClick}
		/>
	);

	const expandedList = () => {
		let allDays = Object.keys(tasksData);

		return allDays.map((day, index) => (
			<div key={`${day}_${index}`}>
				<Header
					text={day}
					key={`${day}_${index}`}
					highlighted={"yes"}
				/>
				<TaskOverviewRow
					key={day}
					day={day}
					tasksData={tasksData[day]}
					className={styles["row-wrapper"]}
				/>
			</div>
		));
	};

	const nonExpandedList = () => {
		let date = new Date();
		let curDay = getDayName(date.getDay());

		return (
			<>
				<Header text={"Today's Overview"} />
				<TaskOverviewRow
					day={"Today's View"}
					tasksData={tasksData[curDay]}
				/>
			</>
		);
	};

	//Conditionals
	const tasksListType = isExpanded ? expandedList() : nonExpandedList();
	const matchListButton = isExpanded ? shrinkListButton : expandListButton;

	return (
		<section className={styles["tasks-section"]}>
			{tasksListType}
			<div className={styles["button-wrapper"]}>{matchListButton}</div>
		</section>
	);
};

export default TaskOverviewList;
