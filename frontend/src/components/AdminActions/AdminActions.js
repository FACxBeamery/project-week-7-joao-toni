import React from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";

import styles from "./AdminActions.module.css"

const AdminActions = ({setShowAction}) => {
    return (
        <div className={styles.actions}>
					<Header size={"medium"} text={"Actions Available"} />
					<Button
						onClick={(e) => setShowAction("addevent")}
						category="outlined"
						buttonText={"Create a new first-week event 🗓"}
					/>
				</div>

    )
}

export default AdminActions;