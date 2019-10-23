import React from "react";
import styles from "./TaskCard.module.css";

import Button from "../Button";
import Badge from "../Badge";

const TaskCard = () => {
	const Header = () => <h1>Task 1</h1>;
	const SubHeader = () => <p className={styles.subHeader}>Due by: 14:00</p>;

	return (
		<div className={styles.card}>
			<div className={styles.leftContent}>
				<div className={styles.header}>
					{<Header />}
					{<SubHeader />}
				</div>
				<div className={styles.description}>
					<p>Lorem ipsum ...</p>
				</div>
				<div className={styles.buttonContainer}>
					<Button size={"medium"} buttonText={"Complete"} />
				</div>
			</div>
			<div className={styles.rightContent}>
				<Badge />
			</div>
		</div>
	);
};

export default TaskCard;
