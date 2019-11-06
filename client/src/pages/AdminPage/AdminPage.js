import React, { useState } from "react";
import NewTaskForm from "../../components/NewTaskForm";
import Button from "../../components/Button";
import Header from "../../components/Header";
import AdminActions from "../../components/AdminActions";

const AdminPage = ({ setView }) => {
    const [showAction, setShowAction] = useState("");
    let isAddingTask = showAction === "addTask";
    return (
        <div>
            <Button
                onClick={e => setView("main")}
                category="accent"
                buttonText={"< Go back to main menu"}
            />
            <Header text={"Admin - settings"} size={"large"} />
            {isAddingEvent ? (
                <NewTaskForm />
            ) : (
                <AdminActions setShowAction={setShowAction} />
            )}
        </div>
    );
};

export default AdminPage;
