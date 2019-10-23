import React from "react";
import styles from "./Button.module.css";

const Button = () => {
	const buttonText = "This is a button";
	const buttonCategory = "primary";
	let button;
	if (buttonCategory) {
		button = (
			<button className={`${styles.button} ${styles[buttonCategory]}`}>
				{buttonText}
			</button>
		);
	}
	return button;
};

export default Button;
