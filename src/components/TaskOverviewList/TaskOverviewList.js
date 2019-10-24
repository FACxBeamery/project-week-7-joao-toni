import React from "react";
import styles from "./TaskOverviewList.module.css";

import TaskOverviewRow from "../TaskOverviewRow";
import Button from "../Button";
import { getDayName } from "../../utils/dateHelpers";

const TaskOverviewList = ({ tasksData, isExpanded = false, setIsExpanded }) => {
	//Functionality
	const handleClick = () => {
		setIsExpanded(!isExpanded);
	};

	// Components
	const expandListButton = (
		<Button
			buttonText="Expand Tasks"
			category="secondary"
			onClick={handleClick}
		/>
	);
	const shrinkListButton = (
		<Button
			buttonText="Shrink Tasks"
			category="secondary"
			onClick={handleClick}
		/>
	);

	const expandedList = () => {
		let allDays = Object.keys(tasksData);
		return allDays.map((day) => (
			<TaskOverviewRow key={day} day={day} tasksData={tasksData[day]} />
		));
	};

	const nonExpandedList = () => {
		let date = new Date();
		let curDay = getDayName(1 || date.getDay());

		return (
			<TaskOverviewRow day="Today's View" tasksData={tasksData[curDay]} />
		);
	};

	//Conditionals
	const tasksListType = isExpanded ? expandedList() : nonExpandedList();
	const matchListButton = isExpanded ? shrinkListButton : expandListButton;

	return (
		<section className={styles.tasksOverviewSection}>
			{tasksListType}
			<div className={styles.listButtonContainer}>{matchListButton}</div>
		</section>
	);
};

export default TaskOverviewList;
