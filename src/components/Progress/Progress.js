import React from "react";
import Header from "../Header";
import styles from "./Progress.module.css";
import ProgressWheel from "../ProgressWheel";

const Progress = () => {
	return (
		<section className={styles.progress}>
			<Header size={"medium"} text={"Your Progress"} sans={true} />
			<ProgressWheel strokeWidth={"32"} sqSize={"200"} percentage={70} />
		</section>
	);
};

export default Progress;
