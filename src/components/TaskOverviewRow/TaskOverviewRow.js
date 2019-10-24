import React from "react";
import styles from "./TaskOverviewRow.module.css";

import Header from "../Header";
import TaskCard from "../TaskCard";

const TaskOverviewRow = ({ day, tasksData }) => {
	console.log(day);
	console.log(tasksData);

	if (day === undefined || tasksData === undefined) return <p>nothin</p>;

	return (
		<div>
			<Header text={day} />
			<div className={styles.cardTaskRow}>
				{tasksData.map((task, i) => {
					console.log(task);
					return (
						<div key={i} className={styles.cardsContainer}>
							<TaskCard {...task} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TaskOverviewRow;
