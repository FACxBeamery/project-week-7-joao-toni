const toggleTaskComplete = require("../../database/queries/users/toggleUserTask");

const toggleTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { dayOfTask, taskID } = req.body;
        const { data } = await toggleTaskComplete(id, dayOfTask, taskID);
        res.status(200).json(data);
    } catch (err) {
        res.status(404).json(err.message);
    }
};

module.exports = toggleTask;
