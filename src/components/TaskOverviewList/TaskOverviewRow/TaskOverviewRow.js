import React, { useState } from "react";
import styles from "./TaskOverviewRow.module.css";

import TaskCard from "../../TaskCard";

const TaskOverviewRow = ({ day, tasksData, setTasksData, isFiltered }) => {
	if (day === undefined || tasksData[day] === undefined)
		return <p>Loading...</p>;

	let filterCount = 0;
	const renderTaskCards = tasksData[day].map((task, i) => {
		if (task.progress === "complete" && isFiltered) {
			filterCount++;
			return null;
		}
		return (
			<TaskCard
				key={i}
				className={styles["card-wrapper"]}
				setTasksData={setTasksData}
				tasksData={tasksData}
				day={day}
				isFiltered={isFiltered}
				{...task}
			/>
		);
	});

	const noTasks = <p className={styles["no-tasks"]}>No tasks for today!</p>;

	// Conditionals
	const tasksDataHasItem =
		tasksData[day].length && tasksData[day].length !== filterCount;

	return (
		<div className={styles["row-wrapper"]}>
			{tasksDataHasItem ? renderTaskCards : noTasks}
		</div>
	);
};

export default TaskOverviewRow;
