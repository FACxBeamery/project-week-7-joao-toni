import React from "react";
import styles from "./Button.module.css";

const defaultOnClick = () => console.log("Set onClick prop as callback");

const Button = ({
	size = "medium",
	category = "primary",
	buttonText,
	onClick = defaultOnClick
}) => {
	return (
		<button
			className={`${styles.button} ${styles[category]} ${styles[size]}`}
			onClick={onClick}
		>
			{buttonText}
		</button>
	);
};
export default Button;
