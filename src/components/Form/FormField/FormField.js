import React from "react";

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

const Select = ({ label, handleInputChange, errors, inputs, options }) => {
	return (
		<select
			value={inputs[label] || ""}
			name={label}
			id={label}
			onChange={handleInputChange}
			className={`${styles.input} ${styles.select} ${
				errors[label] === true ? styles.redborder : ""
			} ${errors[label] === false ? styles.greenborder : ""} `}
		>
			<option value="">Select a day of the week</option>
			{options.map((option, idx) => {
				return (
					<option key={idx} value={option}>
						{option}
					</option>
				);
			})}
		</select>
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
	errorMessage = "This field is required.",
	options
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
						/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(
							e.target.value
						) && e.target.value
							? false
							: true
			  }))
			: setErrors((errors) => ({
					...errors,
					[e.target.name]: e.target.value ? false : true
			  }));
	};
	let input;
	if (type === "input") {
		input = (
			<Input
				label={label}
				handleInputChange={handleInputChange}
				errors={errors}
				inputs={inputs}
			/>
		);
	} else if (type === "textarea") {
		input = (
			<TextArea
				label={label}
				handleInputChange={handleInputChange}
				errors={errors}
				inputs={inputs}
			/>
		);
	} else if (type === "select") {
		input = (
			<Select
				label={label}
				handleInputChange={handleInputChange}
				errors={errors}
				inputs={inputs}
				options={options}
			/>
		);
	}
	return (
		<div className={styles["form-field"]}>
			<label className={styles.label} htmlFor={label}>
				{`${title}*`}{input}
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
