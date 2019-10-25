import React, { useState, useEffect } from "react";
import Header from "../Header";
import styles from "./Progress.module.css";
import ProgressWheel from "../ProgressWheel";

const Progress = ({ tasksData }) => {
	const [totalProg, setTotalProg] = useState(0);
	const [totalComp, setTotalComp] = useState(0);
	const total = totalProg + totalComp;

	useEffect(() => {
		let days = Object.keys(tasksData);
		let tempTotalProg = 0;
		let tempTotalComp = 0;

		days.forEach((day) => {
			if (tasksData[day].length)
				tasksData[day].forEach((task) => {
					if (task.progress === "inprogress") tempTotalProg++;
					else if (task.progress === "complete") tempTotalComp++;
				});
		});

		setTotalProg(tempTotalProg);
		setTotalComp(tempTotalComp);
	}, [tasksData]);

	const percentage = Math.ceil((totalComp / total) * 100);

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
