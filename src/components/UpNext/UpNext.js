import React, { useEffect, useState } from "react";

import Header from "../Header";
import Progress from "../Progress";
import styles from "./UpNext.module.css";

import { getMostRecent } from "../../utils/getMostRecent";

const UpNext = ({ tasksData }) => {
	const [nextTask, setNextTask] = useState(undefined);
	const [employeeName, setEmployeeName] = useState(undefined);

	useEffect(() => {
		getMostRecent().then((data) => {
			console.log(data);

			setNextTask(data);
			setEmployeeName(data.taskWith);
		});
	});
	return nextTask && employeeName ? (
		<div className={styles["upnext-wrapper"]}>
			<div className={styles["title"]}>
				<Header text={"Up Next"} />
				<Header text={nextTask.title} />
			</div>
			<p className={styles["description"]}>
				You have a meeting with{"  "}
				<span className={styles["accent"]}>{employeeName.name}</span>
				{"  "}
				at <span className={styles["accent"]}>
					{nextTask.time}
				</span>{" "}
				today!
			</p>

			<Progress tasksData={tasksData} />
		</div>
	) : (
		<p>Loading Next Task...</p>
	);
};
// { id: 6,
// 	title: 'Beamery Product intro meeting',
// 	description: 'Meet the product!',
// 	time: '11:00',
// 	taskWith: { name: 'Yob Yan', position: 'Grad Manager' },
// 	progress: 'inprogress' }

export default UpNext;
