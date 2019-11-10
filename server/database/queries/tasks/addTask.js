const { getDb } = require("../../dbConnection.js");

const addTask = async newTask => {
    try {
        const db = getDb();
        const tasks = db.collection("tasks");
        const result = await tasks.insertOne(newTask);
        return result;
    } catch (err) {
        return err;
    }
};

module.exports = addTask;
