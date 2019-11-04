import React, { useState, useEffect } from "react";
import FormField from "./FormField";
import Button from "../Button/Button";
import styles from "./Form.module.css";
import SuccessMessage from "../SuccessMessage";

import { areAllObjPropsFalse } from "../../utils/areAllObjPropsFalse";

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
    const formFields = [
        { label: "eventTitle", title: "Title of the event" },
        { label: "eventDescription", title: "Description", type: "textarea" },
        { label: "eventHost", title: "Who's the host?" },
        {
            label: "eventWeekDay",
            title: "Day of the week",
            type: "select",
            options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
        },
        {
            label: "eventTime",
            title: "Time of the event (HH:MM)",
            regex: true,
            errorMessage:
                "This field is required and needs to be on the following format HH:MM, e.g. 12:00, 01:00, etc"
        }
    ];
    const handleSubmit = e => {
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
        <SuccessMessage
            message={"Event added successfully"}
            emoji={"✅"}
            emojiNotifier={"tick emoji"}
        />
    ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
            {formFields.map((field, idx) => (
                <FormField
                    key={idx}
                    label={field.label}
                    title={field.title}
                    inputs={inputs}
                    errors={errors}
                    setInputs={setInputs}
                    setErrors={setErrors}
                    options={field.options}
                    type={field.type}
                    regex={field.regex}
                    errorMessage={field.errorMessage}
                />
            ))}

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
