import React, { useState } from "react";

import styles from "./FormField.module.css";

const FormField = () => {
	const [input, setInput] = useState(null);
	const fieldDetails = {
		label: "fieldName",
		title: "this is the label",
		type: "textarea"
	};

	const { label, title, type } = fieldDetails;

	const handleInputChange = (e) => {
		e.persist();
		setInput(e.target.value);
	};

	if (type === "textarea") {
		return (
			<div className={styles["form-field"]}>
				<label className={styles.label} htmlFor={label}>
					{title}*
					{/* <input
						type="text"
						name={label}
						id={label}
						onChange={handleInputChange}
						className={styles.input}
                    ></input> */}
					<textarea
						type="text"
						name={label}
						id={label}
						onChange={handleInputChange}
						className={`${styles.input} ${styles.textarea}`}
						maxLength="120"
						cols="30"
						rows="3"
					></textarea>
				</label>
			</div>
		);
	}
};

export default FormField;
