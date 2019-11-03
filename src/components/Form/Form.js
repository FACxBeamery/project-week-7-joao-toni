import React, { useState, useEffect } from "react";
import FormField from "./FormField";
import Button from "../Button/Button";
import styles from "./Form.module.css";

import {areAllObjPropsFalse} from "../../utils/areAllObjPropsFalse"


const SuccessMessageWrapper = (props) => (
	<div className={styles["success-message-wrapper"]}>{props.children}</div>
);

const Form = () => {
	const [inputs, setInputs] = useState({});
	const [errors, setErrors] = useState({
		eventDescription: undefined,
		eventWeekDay: undefined,
		eventHost: undefined,
		eventTime: undefined,
		eventTitle: undefined
	});
	const [validForm, setValidForm] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const handleSubmit = (e) => {
		if (e) {
			e.preventDefault();
			let doesNotHaveErrors = areAllObjPropsFalse(errors);
			if (doesNotHaveErrors) {
				setSubmitted(true);
			}
		}
	};

	useEffect(() => {
		setValidForm(areAllObjPropsFalse(errors));
	}, [errors]);

	return submitted ? (
		<SuccessMessageWrapper>
			<p className={styles["success-message"]}>
				Event added successfully{" "}
				<span role="img" aria-label="tick emoji">
					✅
				</span>
			</p>
		</SuccessMessageWrapper>
	) : (
		<form className={styles.form} onSubmit={handleSubmit}>
			<FormField
				label={"eventTitle"}
				title={"Title of the event"}
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
				inputs={inputs}
				errors={errors}
				setInputs={setInputs}
				setErrors={setErrors}
			/>
			<FormField
				label={"eventWeekDay"}
				title={"Day of the week"}
				inputs={inputs}
				errors={errors}
				setInputs={setInputs}
				type={"select"}
				options={[
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday"
				]}
				setErrors={setErrors}
			/>
			<FormField
				label={"eventTime"}
				title={"Time of the event (HH:MM)"}
				inputs={inputs}
				errors={errors}
				setInputs={setInputs}
				setErrors={setErrors}
				regex={true}
				errorMessage="This field is required and needs to be on the following format HH:MM, e.g. 12:00, 01:00, etc"
			/>
			<div className={styles["button-wrapper"]}>
				<Button
					type="submit"
					size={"medium"}
					buttonText={"Add new event"}
					isActive={validForm}
					onClick={handleSubmit}
				/>
			</div>
		</form>
	);
};

export default Form;
