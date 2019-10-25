import React, { useState } from "react";

import styles from "./FormField.module.css";

const TextArea = ({ label, handleInputChange, errors, inputs }) => {
	return (
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
};

const Input = ({ label, handleInputChange, errors, inputs }) => {
	return (
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
};

const FormField = ({
	label,
	title,
	inputs,
	errors,
	type = "input",
	setInputs,
	setErrors
}) => {
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

	return (
		<div className={styles["form-field"]}>
			<label className={styles.label} htmlFor={label}>
				{title}*
				{type === "input" ? (
					<Input
						label={label}
						handleInputChange={handleInputChange}
						errors={errors}
						inputs={inputs}
					/>
				) : (
					<TextArea
						label={label}
						handleInputChange={handleInputChange}
						errors={errors}
						inputs={inputs}
					/>
				)}
			</label>
			{errors[label] ? (
				<p className={styles["warning"]}>This field is required. </p>
			) : (
				<p className={styles["warning"]}> &nbsp;</p>
			)}
		</div>
	);
};

export default FormField;
