import React from "react";
import styles from "./Button.module.css";

const Button = ({ size, buttonText }) => {
	const buttonCategory = "primary";
	const buttonSize = size;
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
