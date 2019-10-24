import React from "react";
import styles from "./Button.module.css";

const Button = ({ size = "medium", category = "primary", buttonText }) => {
	return (
		<button
			className={`${styles.button} ${styles[category]} ${styles[size]}`}
		>
			{buttonText}
		</button>
	);
};
export default Button;
