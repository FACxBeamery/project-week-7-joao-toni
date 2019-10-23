import React, { useState } from "react";
import FormField from "../FormField/FormField";
import Button from "../Button/Button";
import styles from "./Form.module.css";

const Form = () => {
	const [inputs, setInputs] = useState({});
	const handleSubmit = (e) => {
		if (e) {
			e.preventDefault();
		}
	};
	const handleGoBack = (e) => {
		console.log("go back!");
	};

	const handleInputChange = (e) => {
		e.persist();
		setInputs((inputs) => ({
			...inputs,
			[e.target.name]: e.target.value
		}));
	};
	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<FormField
				label={"eventTitle"}
				title={"Title of the event"}
				type={"input"}
				handleInputChange={handleInputChange}
				inputs={inputs}
			/>
			<FormField
				label={"eventDescription"}
				title={"Description"}
				type={"textarea"}
				handleInputChange={handleInputChange}
			/>
			<FormField
				label={"eventHost"}
				title={"Who's the host?"}
				type={"input"}
				handleInputChange={handleInputChange}
			/>
			<FormField
				label={"eventDueDate"}
				title={"Due date"}
				type={"input"}
				handleInputChange={handleInputChange}
			/>
			<Button onClick={handleGoBack} />

			<Button type="submit" />
		</form>
	);
};

export default Form;
