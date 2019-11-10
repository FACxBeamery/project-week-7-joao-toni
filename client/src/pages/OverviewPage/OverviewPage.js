import React, { useState, useEffect } from "react";

import Header from "../../components/Header";
import UpNext from "../../components/UpNext";
import Button from "../../components/Button";
import styles from "./OverviewPage.module.css";

import axios from "axios";

import TaskOverviewList from "../../components/TaskOverviewList";

const OverviewPage = ({ setView }) => {
    const [tasksData, setTasksData] = useState(undefined);

    useEffect(() => {
        // TODO api implementation
        async function getUsers() {
            let result = await axios.get("/users");
            getTasks(result.data[0]._id);
        }
        async function getTasks(userId) {
            let result = await axios.get(`users/${userId}`);
            console.log(result);
            setTasksData(result.data);
        }
        getUsers();
    }, [setTasksData]);

    return tasksData ? (
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
    ) : (
        <h1>Loading Data...</h1>
    );
};

export default OverviewPage;
