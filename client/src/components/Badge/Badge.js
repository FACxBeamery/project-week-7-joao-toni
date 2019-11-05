import React from "react";
import styles from "./badge.module.css";

const Badge = ({ type = "inprogress" }) => {
	const typeIsInprogress = type === "inprogress";

	return (
		<p
			className={`${styles.badge} ${
				typeIsInprogress ? styles.inprogress : styles.complete
			} `}
		>
			{typeIsInprogress ? "in progress" : "complete"}
		</p>
	);
};

export default Badge;
