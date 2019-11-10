const readTasks = require("../../database/queries/tasks/readTasks");

const getTasks = async (req, res) => {
    try {
        let tasks = await readTasks();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(404).json(err.message);
    }
};

module.exports = getTasks;
