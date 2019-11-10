const addTask = require("../../database/queries/tasks/addTask");

const createTask = async (req, res) => {
    try {
        let { body } = req;
        let taskToCreate = body;
        await addTask(taskToCreate);

        res.status(201).send("New Task added successfully");
    } catch (err) {
        res.status(500).json(err.message);
    }
};

module.exports = createTask;
