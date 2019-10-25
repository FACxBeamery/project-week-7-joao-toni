import React, { useState } from "react";
import FormField from "../FormField/FormField";
import Button from "../Button/Button";
import styles from "./Form.module.css";

const Form = () => {
	const [inputs, setInputs] = useState({});
	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);
	const handleSubmit = (e) => {
		if (e) {
			e.preventDefault();
			setSubmitted(true);
		}
	};

	return submitted ? (
		<div className={styles["success-message-wrapper"]}>
			<p className={styles["success-message"]}>
				Event added successfully{" "}
				<span role="img" aria-label="tick emoji">
					✅
				</span>
			</p>
			<Button
				size={"large"}
				buttonText={"Go back to main menu"}
				category={"accent"}
				onClick={handleSubmit}
			/>
		</div>
	) : (
		<form className={styles.form} onSubmit={handleSubmit}>
			<FormField
				label={"eventTitle"}
				title={"Title of the event"}
				type={"input"}
				inputs={inputs}
				errors={errors}
				setInputs={setInputs}
				setErrors={setErrors}
			/>
			<FormField
				label={"eventDescription"}
				title={"Description"}
				type={"textarea"}
				inputs={inputs}
				errors={errors}
				setInputs={setInputs}
				setErrors={setErrors}
			/>
			<FormField
				label={"eventHost"}
				title={"Who's the host?"}
				type={"input"}
				inputs={inputs}
				errors={errors}
				setInputs={setInputs}
				setErrors={setErrors}
			/>
			<FormField
				label={"eventDueDate"}
				title={"Due date"}
				type={"input"}
				inputs={inputs}
				errors={errors}
				setInputs={setInputs}
				setErrors={setErrors}
			/>
			<div className={styles["button-wrapper"]}>
				<Button
					type="submit"
					size={"medium"}
					buttonText={"Add new event"}
					onClick={handleSubmit}
				/>
			</div>
		</form>
	);
};

export default Form;
