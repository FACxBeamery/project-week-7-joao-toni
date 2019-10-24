import React, { useState } from "react";
import styles from "./TaskOverviewRow.module.css";

import Header from "../Header";
import TaskCard from "../TaskCard";

const TaskOverviewRow = ({ day, tasksData }) => {
	if (day === undefined || tasksData === undefined) return <p>Loading...</p>;

	// Componenets
	const renderTaskCards = tasksData.map((task, i) => {
		return (
			<div key={i} className={styles.cardsContainer}>
				<TaskCard {...task} />
			</div>
		);
	});

	const noTasks = <p className={styles.noTasks}>No tasks yet!</p>;

	// Conditionals
	const tasksDataHasItem = tasksData.length;

	return (
		<div>
			<Header text={day} />
			<div className={styles.cardTaskRow}>
				{tasksDataHasItem ? renderTaskCards : noTasks}
			</div>
		</div>
	);
};

export default TaskOverviewRow;
