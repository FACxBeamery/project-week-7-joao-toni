import React from "react";
import styles from "./TaskCard.module.css";

import Button from "../Button";
import Badge from "../Badge";
import ProfileArea from "../ProfileArea";

const TaskCard = ({ id, title, description, time, taskWith }) => {
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
					<Button size={"medium"} buttonText={"Complete"} />
				</div>
			</div>
			<div className={styles.rightContent}>
				<Badge />
				<ProfileArea {...taskWith} />
			</div>
		</div>
	);
};

export default TaskCard;
