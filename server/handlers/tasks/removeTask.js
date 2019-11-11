const deleteTask = require("../../database/queries/tasks/deleteTask");
const removeTask = async (req, res) => {
    try {
        const result = await deleteTask(taskID);
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json(err.message);
    }
};

module.exports = removeTask;
