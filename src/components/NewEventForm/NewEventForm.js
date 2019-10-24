import React from "react";

import Header from "../Header";
import Form from "../Form";

const NewEventForm = () => {
	return (
		<header>
			<Header size={"large"} text={"Add new first week event"} />
			<Form />
		</header>
	);
};

export default NewEventForm;
