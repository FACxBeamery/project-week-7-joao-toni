// get db
// get deleteTask
const removeTask = async (req, res) => {
    try {
        const {data} = await deleteTask(db.collection("tasks"), taskID);
        res.status(201).json(data);

    } catch(err) {
        res.status(404).json(err.message);
    }
};