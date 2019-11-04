import React, { useState, useEffect } from "react";
import Header from "../Header";
import styles from "./Progress.module.css";
import ProgressWheel from "./ProgressWheel";

const Progress = ({ tasksData }) => {
	const [totalProgressCount, setTotalProgressCount] = useState(0);
	const [totalCompletedCount, setTotalCompletedCount] = useState(0);

	const total = totalProgressCount + totalCompletedCount;

	useEffect(() => {
		let days = Object.keys(tasksData);
		let tempTotalProgressCount = 0;
		let tempTotalCompleteCount = 0;

		days.forEach((day) => {
			if (tasksData[day].length)
				tasksData[day].forEach((task) => {
					// conditionals
					const taskProgressIsInprogress =
						task.progress === "inprogress";
					const taskProgressIsComplete = task.progress === "complete";

					if (taskProgressIsInprogress) tempTotalProgressCount++;
					else if (taskProgressIsComplete) tempTotalCompleteCount++;
				});
		});

		setTotalProgressCount(tempTotalProgressCount);
		setTotalCompletedCount(tempTotalCompleteCount);
	}, [tasksData]);

	const percentage = Math.ceil((totalCompletedCount / total) * 100);

	return (
		<section className={styles.progress}>
			<Header size={"medium"} text={"Your Weekly Progress"} sans={true} />
			<ProgressWheel
				strokeWidth={"32"}
				sqSize={"200"}
				percentage={percentage || 0}
			/>
		</section>
	);
};

export default Progress;
