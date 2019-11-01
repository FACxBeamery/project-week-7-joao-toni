import React, { useState, useEffect } from "react";
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

const FilterComplete = ({ isFiltered, setIsFiltered }) => {
	return (
		<div className={styles["checkbox-wrapper"]}>
			<span className={styles.badge}>
				<p>Filter Completed</p>
				<label className={styles.switch}>
					<input
						type="checkbox"
						checked={isFiltered}
						onChange={(event) => setIsFiltered(!isFiltered)}
					/>
					<span className={`${styles.slider} ${styles.round}`}></span>
				</label>
			</span>
		</div>
	);
};

const TaskOverviewList = ({ tasksData, setTasksData }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [isFiltered, setIsFiltered] = useState(false);

	//Functionality
	const handleClick = () => {
		setIsExpanded(!isExpanded);
	};

	// Components
	const expandListButton = (
		<Button
			buttonText="Expand Tasks"
			category="primary"
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
					dayName={day}
					day={day}
					tasksData={tasksData}
					setTasksData={setTasksData}
					isFiltered={isFiltered}
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
					day={curDay}
					setTasksData={setTasksData}
					tasksData={tasksData}
					isFiltered={isFiltered}
				/>
			</>
		);
	};

	//Conditionals
	const tasksListType = isExpanded ? expandedList() : nonExpandedList();
	const matchListButton = isExpanded ? shrinkListButton : expandListButton;

	return (
		<section className={styles["tasks-section"]}>
			<FilterComplete
				isFiltered={isFiltered}
				setIsFiltered={setIsFiltered}
			/>
			{tasksListType}
			<div className={styles["button-wrapper"]}>{matchListButton}</div>
		</section>
	);
};

export default TaskOverviewList;
