import React, { useState, useEffect } from "react";

import Header from "../../components/Header";
import UpNext from "../../components/UpNext";
import Button from "../../components/Button";
import styles from "./OverviewPage.module.css";

import TaskOverviewList from "../../components/TaskOverviewList";

// TODO remove import after API implementation
import { getTasks } from "../../utils/getTasks";

const OverviewPage = ({ setView }) => {
    const [tasksData, setTasksData] = useState({});

    useEffect(() => {
        // TODO api implementation
        getTasks().then(data => setTasksData(data));
    }, [setTasksData]);

    return (
        <div>
            <nav>
                <Button
                    onClick={e => setView("main")}
                    category="accent"
                    buttonText={"< Go back to main menu"}
                />
            </nav>
            <main>
                <Header
                    size={"large"}
                    text={"Welcome to your first week, Paul"}
                />
                <div className={styles["top-content"]}>
                    <UpNext tasksData={tasksData} />
                </div>
                <TaskOverviewList
                    tasksData={tasksData}
                    setTasksData={setTasksData}
                />
            </main>
        </div>
    );
};

export default OverviewPage;
