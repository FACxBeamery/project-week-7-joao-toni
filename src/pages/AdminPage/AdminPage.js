import React, { useState } from "react";
import NewEventForm from "../../components/NewEventForm";
import Button from "../../components/Button";
import Header from "../../components/Header";
import styles from "./AdminPage.module.css";

const AdminPage = ({ setView }) => {
	const [showAction, setShowAction] = useState(false);
	return (
		<>
			<Button
				onClick={(e) => setView("main")}
				category="accent"
				buttonText={"< Go back to main menu"}
			/>
			<Header text={"Admin - settings"} size={"large"} />
			{showAction ? (
				<NewEventForm />
			) : (
				<div className={styles.actions}>
					<Header size={"medium"} text={"Actions Available"} />
					<Button
						onClick={(e) => setShowAction(true)}
						category="outlined"
						buttonText={"Create a new first-week event 🗓"}
					/>
				</div>
			)}
		</>
	);
};

export default AdminPage;
