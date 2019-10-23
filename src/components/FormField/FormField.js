import React, { useState } from "react";

import styles from "./FormField.module.css";

const FormField = ({ label, title, inputs, type, handleInputChange }) => {
	// const [input, setInput] = useState(null);

	let inputElement;

	if (type === "textarea") {
		inputElement = (
			<textarea
				type="text"
				name={label}
				id={label}
				onChange={handleInputChange}
				className={`${styles.input} ${styles.textarea} ${
					inputs[label] ? "" : styles.redborder
				}`}
				maxLength="120"
				cols="30"
				rows="3"
			></textarea>
		);
	} else if (type === "input") {
		inputElement = (
			<input
				type="text"
				name={label}
				id={label}
				onChange={handleInputChange}
				className={`${styles.input} ${input ? "" : styles.redborder}`}
			></input>
		);
	}
	return (
		<div className={styles["form-field"]}>
			<label className={styles.label} htmlFor={label}>
				{title}*{inputElement}
			</label>
			{input ? "" : <p>im required</p>}
		</div>
	);
};

export default FormField;
