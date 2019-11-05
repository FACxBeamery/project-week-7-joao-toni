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

export default TextArea;
