import React, { useState } from "react";
import styles from "./TaskOverviewRow.module.css";

import TaskCard from "../../TaskCard";

const TaskOverviewRow = ({ day, tasksData, setTasksData }) => {
	if (day === undefined || tasksData[day] === undefined)
		return <p>Loading...</p>;

	const renderTaskCards = tasksData[day].map((task, i) => {
		return (
			<TaskCard
				key={i}
				className={styles["card-wrapper"]}
				setTasksData={setTasksData}
				tasksData={tasksData}
				day={day}
				{...task}
			/>
		);
	});

	const noTasks = <p className={styles["no-tasks"]}>No tasks for today!</p>;

	// Conditionals
	const tasksDataHasItem = tasksData[day].length;

	return (
		<div className={styles["row-wrapper"]}>
			{tasksDataHasItem ? renderTaskCards : noTasks}
		</div>
	);
};

export default TaskOverviewRow;
