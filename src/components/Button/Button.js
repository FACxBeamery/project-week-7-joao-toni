import React from "react";
import styles from "./Button.module.css";

const Button = () => {
	const buttonText = "This is a button";
	const buttonCategory = "primary";
	const buttonSize = "medium";
	let button;
	if (buttonCategory && buttonSize) {
		button = (
			<button
				className={`${styles.button} ${styles[buttonCategory]} ${styles[buttonSize]}`}
			>
				{buttonText}
			</button>
		);
	}
	return button;
};

export default Button;
