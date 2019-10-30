import React, { useState, useEffect } from "react";
import styles from "./TaskCard.module.css";

import Button from "../Button";
import Badge from "../Badge";
import ProfileArea from "../ProfileArea";

const TaskCard = ({ id, title, description, time, taskWith, progress }) => {
	// Consts
	const [typeProg, typeComp] = ["inprogress", "complete"];

	const [type, setType] = useState(typeProg);

	useEffect(() => {
		if (progress === typeProg || progress === typeComp) setType(progress);
		else setType(typeProg);
	}, [progress, setType, typeProg, typeComp]);

	// handleClicks
	// TODO update with mongodb call to update data
	const typeProgHandleClick = () => setType(typeComp);
	const typeCompHandleClick = () => setType(typeProg);

	// Conditionals
	const typeIsProg = type === typeProg;

	const btnText = typeIsProg ? "Complete" : "Re-open task";
	const btnCategory = typeIsProg ? "primary" : "accent";
	const handleClick = typeIsProg ? typeProgHandleClick : typeCompHandleClick;

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
