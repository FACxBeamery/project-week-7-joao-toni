import React from "react";

import styles from "./FormField.module.css";

const Input = ({ label, handleInputChange, errors, inputs }) => {
    return (
        <input
            type="text"
            name={label}
            id={label}
            onChange={handleInputChange}
            className={`${styles.input} 
            ${errors[label] === true ? styles.redborder : ""} ${
                errors[label] === false ? styles.greenborder : ""
            } `}
            value={inputs[label] || ""}
        ></input>
    );
};

export default Input;
