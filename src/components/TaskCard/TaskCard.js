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
	progress
}) => {
	// Consts
	const [typeProg, typeComp] = ["inprogress", "complete"];

	const [type, setType] = useState(typeProg);

	useEffect(() => {
		if (progress === typeProg || progress === typeComp) setType(progress);
		else setType(typeProg);
	}, [progress, setType, typeProg, typeComp]);

	// handleClick
	// TODO update with mongodb call to update data
	const handleChangeTypeToClick = (newType) => {
		let newData = { progress: newType };

		setTasksData(updateTask(id, day, newData, tasksData));
		setType(newType);
	};

	// Conditionals
	const typeIsProg = type === typeProg;

	const btnText = typeIsProg ? "Complete" : "Re-open task";
	const btnCategory = typeIsProg ? "primary" : "accent";

	const handleClick = typeIsProg
		? () => handleChangeTypeToClick(typeComp)
		: () => handleChangeTypeToClick(typeProg);

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
				<Badge type={type} />
				<ProfileArea {...taskWith} />
			</div>
		</div>
	);
};

export default TaskCard;
