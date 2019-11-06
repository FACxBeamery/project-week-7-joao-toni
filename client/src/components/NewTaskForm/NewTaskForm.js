import React from "react";

import Header from "../Header";
import Form from "../Form";

const NewTaskForm = () => {
    return (
        <header>
            <Header
                size={"large"}
                text={"🗓 Add new first week task 🗓"}
                centered={true}
            />
            <Form />
        </header>
    );
};

export default NewTaskForm;
