import React, { useState } from "react";

import styles from "./FormField.module.css";

const FormField = ({
	label,
	title,
	inputs,
	errors,
	type,
	handleInputChange
}) => {
	let inputElement;

	if (type === "textarea") {
		inputElement = (
			<textarea
				type="text"
				name={label}
				id={label}
				onChange={handleInputChange}
				className={`${styles.input} ${styles.textarea} ${
					errors[label] ? styles.redborder : ""
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
				className={`${styles.input} ${
					errors[label] ? styles.redborder : ""
				}`}
			></input>
		);
	}
	return (
		<div className={styles["form-field"]}>
			<label className={styles.label} htmlFor={label}>
				{title}*{inputElement}
			</label>
			{errors[label] ? (
				<p className={styles["warning"]}>im required</p>
			) : (
				""
			)}
		</div>
	);
};

export default FormField;
