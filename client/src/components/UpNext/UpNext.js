import React, { useEffect, useState } from "react";

import Header from "../Header";
import Progress from "../Progress";
import styles from "./UpNext.module.css";

import { getMostRecent } from "../../utils/getMostRecent";

const UpNext = ({ tasksData }) => {
    const [nextTask, setNextTask] = useState(undefined);
    const [employeeName, setEmployeeName] = useState(undefined);

    useEffect(() => {
        getMostRecent()
            .then(data => {
                setNextTask(data);
                setEmployeeName(data.taskHost);
            })
            .catch(err => {
                setNextTask(undefined);
                setEmployeeName(undefined);
            });
    });
    return nextTask && employeeName ? (
        <div className={styles["upnext-wrapper"]}>
            <div className={styles["title"]}>
                <Header text={"Up Next"} />
                <Header text={nextTask.title} />
            </div>
            <p className={styles["description"]}>
                You have a meeting with{"  "}
                <span className={styles["accent"]}>{employeeName.name}</span>
                {"  "}
                at <span className={styles["accent"]}>
                    {nextTask.time}
                </span>{" "}
                today!
            </p>

            <Progress tasksData={tasksData} />
        </div>
    ) : (
        <div className={styles["upnext-wrapper"]}>
            <div className={styles["title"]}>
                <Header text={"Up Next"} />
            </div>
            <p className={styles["description"]}>No tasks for today!</p>

            <Progress tasksData={tasksData} />
        </div>
    );
};

export default UpNext;
