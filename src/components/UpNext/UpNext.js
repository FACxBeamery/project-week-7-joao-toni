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
				src="https://dwv100zweqd2m.cloudfront.net/uploads/user/company_logo/28/beamery.png"
				alt="Beamery's logo"
				className={styles.img}
			/>
		</div>
	);
};

export default UpNext;
