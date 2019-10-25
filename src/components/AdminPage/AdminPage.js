import React from "react";
import NewEventForm from "../NewEventForm";
import Button from "../Button";

const AdminPage = ({ setView }) => {
	return (
		<>
			<Button
				onClick={(e) => setView("main")}
				category="accent"
				buttonText={"< Go back to main menu"}
			/>
			<NewEventForm />
		</>
	);
};

export default AdminPage;
