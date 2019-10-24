import React, { useState, useEffect } from "react";
import styles from "./TaskCard.module.css";

import Button from "../Button";
import Badge from "../Badge";
import ProfileArea from "../ProfileArea";

const TaskCard = ({ id, title, description, time, taskWith }) => {
	// Consts
	const [typeProg, typeComp] = ["inprogress", "complete"];

	const [type, setType] = useState(typeProg);

	// handleClicks
	const typeProgHandleClick = () => setType(typeComp);
	const typeCompHandleClick = () => setType(typeProg);

	// Conditionals
	const typeIsProg = type === typeProg;
	const typeIsComp = type === typeComp;

	const btnText = typeIsProg ? "Complete" : "Re-open task";
	const btnCategory = typeIsProg ? "primary" : "outlined";
	const handleClick = typeIsProg ? typeProgHandleClick : typeCompHandleClick;

	const Header = () => <h1>{title}</h1>;
	const SubHeader = () => <p className={styles.subHeader}>Due by: {time}</p>;

	return (
		<div className={styles.card}>
			<div className={styles.leftContent}>
				<div className={styles.header}>
					{<Header />}
					{<SubHeader />}
				</div>
				<div className={styles.description}>
					<p>{description}</p>
				</div>
				<div className={styles.buttonContainer}>
					<Button
						size={"medium"}
						buttonText={btnText}
						onClick={handleClick}
						category={btnCategory}
					/>
				</div>
			</div>
			<div className={styles.rightContent}>
				<Badge type={type} />
				<ProfileArea {...taskWith} />
			</div>
		</div>
	);
};

export default TaskCard;
