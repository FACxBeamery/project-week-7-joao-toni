import React, { useState } from "react";
import styles from "./TaskOverviewRow.module.css";

import Header from "../Header";
import TaskCard from "../TaskCard";

const TaskOverviewRow = ({ day, tasksData }) => {
	if (day === undefined || tasksData === undefined) return <p>Loading...</p>;

	// Componenets
	const renderTaskCards = tasksData.map((task, i) => {
		console.log("task:", task);

		return (
			<TaskCard key={i} className={styles["card-wrapper"]} {...task} />
		);
	});

	const noTasks = <p className={styles["no-tasks"]}>No tasks yet!</p>;

	// Conditionals
	const tasksDataHasItem = tasksData.length;

	return (
		<div className={styles["row-wrapper"]}>
			{/* <Header text={day} /> */}
			{/* <div className={styles.cardTaskRow}> */}
			{tasksDataHasItem ? renderTaskCards : noTasks}
			{/* </div> */}
		</div>
	);
};

export default TaskOverviewRow;
