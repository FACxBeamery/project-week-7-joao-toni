import React, { useState } from "react";

import styles from "./FormField.module.css";

const FormField = ({
	label,
	title,
	inputs,
	errors,
	type,
	setInputs,
	setErrors
}) => {
	let inputElement;

	const handleInputChange = (e) => {
		e.persist();
		setInputs((inputs) => ({
			...inputs,
			[e.target.name]: e.target.value
		}));
		setErrors((errors) => ({
			...errors,
			[e.target.name]: e.target.value ? false : true
		}));
	};

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
				value={inputs[label] || ""}
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
				value={inputs[label] || ""}
			></input>
		);
	}
	return (
		<div className={styles["form-field"]}>
			<label className={styles.label} htmlFor={label}>
				{title}*{inputElement}
			</label>
			{errors[label] ? (
				<p className={styles["warning"]}>This field is required. </p>
			) : (
				""
			)}
		</div>
	);
};

export default FormField;
