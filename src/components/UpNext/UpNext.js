import React from "react";

import Header from "../Header";
import styles from "./UpNext.module.css";

const UpNext = () => {
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
			<img
				src="https://assets-ouch.icons8.com/preview/139/4ee85576-55f0-4025-8f6d-98f9a33938e8.png"
				alt=""
				className={styles.img}
			/>
		</div>
	);
};

export default UpNext;
