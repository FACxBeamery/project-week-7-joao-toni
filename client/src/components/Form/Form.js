import React, { useState, useEffect } from "react";
import FormField from "./FormField";
import Button from "../Button/Button";
import styles from "./Form.module.css";
import SuccessMessage from "../SuccessMessage";
import axios from 'axios';

import { areAllObjPropsFalse } from "../../utils/areAllObjPropsFalse";

const Form = () => {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({
        taskDescription: undefined,
        taskWeekDay: undefined,
        taskHostName: undefined,
        taskHostTitle: undefined,
        taskTime: undefined,
        taskTitle: undefined
    });
    const [validForm, setValidForm] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const formFields = [
        { label: "taskTitle", title: "Title of the task" },
        { label: "taskDescription", title: "Description", type: "textarea" },
        { label: "taskHostName", title: "Who's the host?" },
        { label: "taskHostTitle", title: "What's their title?" },
        {
            label: "taskWeekDay",
            title: "Day of the week",
            type: "select",
            options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
        },
        {
            label: "taskTime",
            title: "Time of the task (HH:MM)",
            regex: true,
            errorMessage:
                "This field is required and needs to be on the following format HH:MM, e.g. 12:00, 01:00, etc"
        }
    ];
    const handleSubmit = async e => {
        if (e) {
            e.preventDefault();
            let doesNotHaveErrors = areAllObjPropsFalse(errors);
            if (doesNotHaveErrors) {
                
                const newTaskData = {
                    title: inputs.taskTitle,
                    description: inputs.taskDescription,
                    time: inputs.taskTime,
                    taskWith: {
                        name: inputs.taskHostName,
                        title: inputs.taskHostTitle,
                    },
                    progress: "inprogress",
                    dayOfTheWeek: inputs.taskWeekDay
                }
                try {
                    const response = await axios.post("/tasks", newTaskData);
                    setSubmitted(true);
                } catch(err) {
                    console.log(err);
                    
                }
            }
        }
    };

    useEffect(() => {
        setValidForm(areAllObjPropsFalse(errors));
    }, [errors]);

    return submitted ? (
        <SuccessMessage
            message={"Task added successfully"}
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
                    buttonText={"Add new task"}
                    isActive={validForm}
                    onClick={handleSubmit}
                />
            </div>
        </form>
    );
};

export default Form;
