import React, { useState, useEffect } from "react";
import styles from "./TaskCard.module.css";

import Button from "../Button";
import Badge from "../Badge";
import ProfileArea from "../ProfileArea";

const updateTask = (id, day, toUpdateData = {}, tasksData) => {
	// TODO update data through API call rather than dummyData
	/* new obj so state can recognise mutation */
	let newTasksData = { ...tasksData };
	let dayTasks = newTasksData[day];

	dayTasks.forEach((task, i) => {
		if (task.id === id) {
			newTasksData[day][i] = { ...task, ...toUpdateData };
			return true;
		}
		return false;
	});

	return newTasksData;
};

const TaskCard = ({
	setTasksData,
	tasksData,
	day,
	id,
	title,
	description,
	time,
	taskWith,
	progress,
	isFiltered = false
}) => {
	// Consts
	const [taskTypeInprogress, taskTypeComplete] = ["inprogress", "complete"];
	const [cardTaskType, setCardTaskType] = useState(taskTypeInprogress);

	// conditionals
	const taskProgressIsInprogress = progress === taskTypeInprogress;
	const taskProgressIsComplete = progress === taskTypeComplete;

	useEffect(() => {
		if (taskProgressIsInprogress || taskProgressIsComplete)
			setCardTaskType(progress);
		else setCardTaskType(taskTypeInprogress);
	}, [
		progress,
		setCardTaskType,
		taskTypeInprogress,
		taskTypeComplete,
		taskProgressIsInprogress,
		taskProgressIsComplete
	]);

	// handleClick
	// TODO update with mongodb call to update data
	const handleChangeTypeToClick = (newType) => {
		let newData = { progress: newType };

		setTasksData(updateTask(id, day, newData, tasksData));
		setCardTaskType(newType);
	};

	// Conditionals
	const cardTypeIsInprogress = cardTaskType === taskTypeInprogress;

	const btnText = cardTypeIsInprogress ? "Mark as complete" : "Re-open task";
	const btnCategory = cardTypeIsInprogress ? "primary" : "accent";

	const handleClick = cardTypeIsInprogress
		? () => handleChangeTypeToClick(taskTypeComplete)
		: () => handleChangeTypeToClick(taskTypeInprogress);

	const Header = () => <h1>{title}</h1>;
	const SubHeader = () => (
		<p className={styles["sub-header"]}>Due by: {time}</p>
	);

	return (
		<div className={styles.card}>
			<div
				className={`${styles["content-wrapper"]} ${
					styles["content-wrapper__left"]
				} `}
			>
				<div className={styles.header}>
					{<Header />}
					{<SubHeader />}
				</div>
				<div className={styles.description}>
					<p>{description}</p>
				</div>
				<div className={styles["button-wrapper"]}>
					<Button
						size={"medium"}
						buttonText={btnText}
						onClick={handleClick}
						category={btnCategory}
					/>
				</div>
			</div>
			<div
				className={`${styles["content-wrapper"]} ${
					styles["content-wrapper__right"]
				}`}
			>
				<Badge type={cardTaskType} />
				<ProfileArea {...taskWith} />
			</div>
		</div>
	);
};

export default TaskCard;
