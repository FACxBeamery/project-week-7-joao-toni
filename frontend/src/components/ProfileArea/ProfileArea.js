import React from "react";
import styles from "./ProfileArea.module.css";

const ProfileArea = ({ ppSrc, name, position }) => {
	const profilePicture = (
		<span className={`${styles.frame} ${styles.centre}`}>
			<img
				className={styles.centre}
				src={
					ppSrc ||
					"https://img.icons8.com/cotton/64/000000/person-male--v2.png"
				}
				alt="Team member who will help you complete the task."
			></img>
		</span>
	);

	const nameElement = <p>{name || "John Smith"}</p>;

	const positionElement = (
		<p className={styles["title-position--green"]}>
			{position || "Manager"}
		</p>
	);

	return (
		<div className={styles.container}>
			<p className={styles.centre}>With</p>
			{profilePicture}
			{nameElement}
			{positionElement}
		</div>
	);
};

export default ProfileArea;
