const addTask = require("../../database/queries/tasks/addTask");
const addTaskToAllUsers = require("../../database/queries/users/addTaskToAllUsers");

const createTask = async (req, res) => {
    try {
        let { body } = req;
        let taskToCreate = body;
        let result = await addTask(taskToCreate);
        let taskID = result.ops[0]._id;
        await addTaskToAllUsers(taskID, body.dayOfTheWeek);
        res.status(201).json(
            `Task with id:  ${taskID} has been added to all users successfully`
        );
    } catch (err) {
        res.status(500).json(err.message);
    }
};

module.exports = createTask;
