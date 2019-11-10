import React, { useState, useEffect } from "react";
import styles from "./TaskCard.module.css";

import Button from "../Button";
import Badge from "../Badge";
import ProfileArea from "../ProfileArea";
import Header from "../Header";
import axios from "axios";

const TaskCard = ({
    setTasksData,
    tasksData,
    day,
    id,
    title,
    description,
    time,
    taskHost,
    progress,
    taskId,
    isFiltered = false
}) => {
    // Consts
    const [taskTypeInprogress, taskTypeComplete] = ["inprogress", "complete"];
    const [cardTaskType, setCardTaskType] = useState(taskTypeInprogress);

    // conditionals
    const taskProgressIsInprogress = progress === taskTypeInprogress;
    const taskProgressIsComplete = progress === taskTypeComplete;

    useEffect(() => {
        if (taskProgressIsInprogress || taskProgressIsComplete)
            setCardTaskType(progress);
        else setCardTaskType(taskTypeInprogress);
    }, [
        progress,
        setCardTaskType,
        taskTypeInprogress,
        taskTypeComplete,
        taskProgressIsInprogress,
        taskProgressIsComplete
    ]);

    // Conditionals
    const cardTypeIsInprogress = cardTaskType === taskTypeInprogress;

    const btnText = cardTypeIsInprogress ? "Mark as complete" : "Re-open task";
    const btnCategory = cardTypeIsInprogress ? "primary" : "accent";

    const handleClick = async () => {
        async function getUsers() {
            let result = await axios.get("/users");
            toggleTask(result.data[0]._id);
        }
        async function toggleTask(userId) {
            await axios.patch(`/users/${userId}`, {
                dayOfTask: day,
                taskID: taskId
            });
            let result = await axios.get(`/users/${userId}`);

            await setTasksData(result.data);
        }
        getUsers();
    };

    const SubHeader = () => (
        <p className={styles["sub-header"]}>Due by: {time}</p>
    );

    return (
        <div className={styles.card}>
            <div
                className={`${styles["content-wrapper"]} ${
                    styles["content-wrapper__left"]
                } `}
            >
                <div className={styles.header}>
                    <Header text={title} />
                    {<SubHeader />}
                </div>
                <div className={styles.description}>
                    <p>{description}</p>
                </div>
                <div className={styles["button-wrapper"]}>
                    <Button
                        size={"medium"}
                        buttonText={btnText}
                        onClick={handleClick}
                        category={btnCategory}
                    />
                </div>
            </div>
            <div
                className={`${styles["content-wrapper"]} ${
                    styles["content-wrapper__right"]
                }`}
            >
                <Badge type={cardTaskType} />
                <ProfileArea {...taskHost} />
            </div>
        </div>
    );
};

export default TaskCard;
