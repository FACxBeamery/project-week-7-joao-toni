import React from "react";
import styles from "./Badge.module.css";

const Badge = ({ type = "inprogress" }) => {
	// badge variations
	const inprogress = (
		<p className={`${styles.badge} ${styles.inprogress}`}>in progress</p>
	);
	const complete = (
		<p className={`${styles.badge} ${styles.complete}`}>complete</p>
	);

	// conditions
	const typeIsInprogress = type === "inprogress";

	return typeIsInprogress ? inprogress : complete;
};

export default Badge;
