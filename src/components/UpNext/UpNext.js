import React from "react";

import Header from "../Header";
import Progress from "../Progress";
import styles from "./UpNext.module.css";

const UpNext = ({ tasksData }) => {
	return (
		<div className={styles["upnext-wrapper"]}>
			<div className={styles["title"]}>
				<Header text={"Up Next"} />
			</div>
			<p className={styles["description"]}>
				You have a meeting with{"  "}
				<span className={styles["accent"]}>Lyndsey Scott</span>
				{"  "}
				at <span className={styles["accent"]}>16:00</span> today!
			</p>

			<Progress tasksData={tasksData} />
		</div>
	);
};

export default UpNext;
