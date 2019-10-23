import React from "react";
import style from "./badge.module.css";

const Badge = ({ type = "inprogress" }) => {
	// badge variations
	const inprogress = (
		<p className={`${style.badge} ${style.inprogress}`}>in progress</p>
	);
	const complete = (
		<p className={`${style.badge} ${style.complete}`}>complete</p>
	);

	// conditions
	const typeIsInprogress = type === "inprogress";

	return !typeIsInprogress ? inprogress : complete;
};

export default Badge;
