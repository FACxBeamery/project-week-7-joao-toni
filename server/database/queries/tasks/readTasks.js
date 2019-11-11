const { getDb } = require("../../dbConnection");

const readTasks = async () => {
    try {
        const db = getDb();
        const tasks = db.collection("tasks");
        const result = tasks.find({}).toArray();
        return result;
    } catch (err) {
        return err;
    }
};

module.exports = readTasks;
