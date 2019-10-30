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
				errors[label] === true ? styles.redborder : ""
			} ${errors[label] === false ? styles.greenborder : ""} `}
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
				errors[label] === true ? styles.redborder : ""
			} ${errors[label] === false ? styles.greenborder : ""} `}
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
	setErrors,
	regex = undefined,
	errorMessage = "This field is required. ",
	checkIfThereAreErrors
}) => {
	const handleInputChange = (e) => {
		e.persist();
		setInputs((inputs) => ({
			...inputs,
			[e.target.name]: e.target.value
		}));
		regex
			? setErrors((errors) => ({
					...errors,
					[e.target.name]:
						new RegExp(regex).test(e.target.value) && e.target.value
							? false
							: true
			  }))
			: setErrors((errors) => ({
					...errors,
					[e.target.name]: e.target.value ? false : true
			  }));
		checkIfThereAreErrors();
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
				<p className={styles["warning"]}>{errorMessage} </p>
			) : (
				<p className={styles["warning"]}> &nbsp;</p>
			)}
		</div>
	);
};

export default FormField;
