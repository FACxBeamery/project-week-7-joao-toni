import React, { useState } from "react";
import styles from "./TaskOverviewRow.module.css";

import TaskCard from "../../TaskCard";

const TaskOverviewRow = ({ day, tasksData }) => {
	if (day === undefined || tasksData === undefined) return <p>Loading...</p>;

	const renderTaskCards = tasksData.map((task, i) => {
		return (
			<TaskCard key={i} className={styles["card-wrapper"]} {...task} />
		);
	});

	const noTasks = (
		<>
			<p className={styles["no-tasks"]}>No tasks for today!</p>
		</>
	);

	// Conditionals
	const tasksDataHasItem = tasksData.length;

	return (
		<div className={styles["row-wrapper"]}>
			{tasksDataHasItem ? renderTaskCards : noTasks}
		</div>
	);
};

export default TaskOverviewRow;
