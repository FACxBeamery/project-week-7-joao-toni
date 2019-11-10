const { getDb } = require("../../dbConnection");

const addTaskToAllUsers = async (taskId, taskDayOfTheWeek) => {
    try {
        const db = getDb();
        const users = db.collection("users");

        const parsedTask = {
            taskId,
            progress: "inprogress"
        };
        const newValues = {
            $push: { [`tasks.${taskDayOfTheWeek}`]: parsedTask }
        };

        const result = await users.updateMany({}, newValues);
        return result;
    } catch (err) {
        throw err;
    }
};

module.exports = addTaskToAllUsers;
