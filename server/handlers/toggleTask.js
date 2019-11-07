// get db
// get editTask
const toggleTask = async (req, res) => {
    const action = req.body.action === "markAsComplete" ? true : false;
    try {
        const {data} = await editTask(db.collection("tasks"), taskID, action);
        res.status(201).json(data);

    } catch(err) {
        res.status(404).json(err.message);
    }
};

module.exports = toggleTask;