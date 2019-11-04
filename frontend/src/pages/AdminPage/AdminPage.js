import React, { useState } from "react";
import NewEventForm from "../../components/NewEventForm";
import Button from "../../components/Button";
import Header from "../../components/Header";
import AdminActions from "../../components/AdminActions"

const AdminPage = ({ setView }) => {
	const [showAction, setShowAction] = useState("");
	return (
		<div>
			<Button
				onClick={(e) => setView("main")}
				category="accent"
				buttonText={"< Go back to main menu"}
			/>
			<Header text={"Admin - settings"} size={"large"} />
			{showAction === "addevent" ? (
				<NewEventForm />
			) : (
				<AdminActions 
					setShowAction = {setShowAction}/>
				
			)}
		</div>
	);
};

export default AdminPage;
