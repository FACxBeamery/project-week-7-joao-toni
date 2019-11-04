import React from "react";

import styles from "./FormField.module.css";

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

export default Select;
