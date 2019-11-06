import React from "react";
import Header from "../Header";
import Button from "../Button";

import styles from "./AdminActions.module.css";

const AdminActions = ({ setShowAction }) => {
    return (
        <div className={styles.actions}>
            <Header size={"medium"} text={"Actions Available"} />
            <Button
                onClick={e => setShowAction("addTask")}
                category="outlined"
                buttonText={"Create a new first-week task 🗓"}
            />
        </div>
    );
};

export default AdminActions;
