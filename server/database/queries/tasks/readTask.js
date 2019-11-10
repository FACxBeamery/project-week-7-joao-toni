const { getDb } = require("../../dbConnection");
const readTask = async taskId => {
    try {
        const db = getDb();
        const tasks = db.collection("tasks");
        const result = await tasks.find(taskId).toArray();
        return result;
    } catch (err) {
        return err;
    }
};

module.exports = readTask;
