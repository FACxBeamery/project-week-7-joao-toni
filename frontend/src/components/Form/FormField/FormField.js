import React from "react";

import styles from "./FormField.module.css";

import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";

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
    const handleInputChange = e => {
        e.persist();

        setInputs(inputs => ({
            ...inputs,
            [e.target.name]: e.target.value
        }));
        regex
            ? setErrors(errors => ({
                  ...errors,
                  [e.target.name]:
                      /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(
                          e.target.value
                      ) && e.target.value
                          ? false
                          : true
              }))
            : setErrors(errors => ({
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
    const isFieldInvalid = Boolean(errors[label]);
    return (
        <div className={styles["form-field"]}>
            <label className={styles.label} htmlFor={label}>
                {`${title}*`}
                {input}
            </label>
            {isFieldInvalid ? (
                <p className={styles["warning"]}>{errorMessage} </p>
            ) : (
                <p className={styles["warning"]}> &nbsp;</p>
            )}
        </div>
    );
};

export default FormField;
