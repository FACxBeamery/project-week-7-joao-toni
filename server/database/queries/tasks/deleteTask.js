const ObjectId = require("mongodb").ObjectId;
const { getDb } = require("../../dbConnection.js");

const deleteTask = idToDelete => {
    const db = getDb();
    const tasks = db.collection("tasks");

    tasks.deleteOne({ _id: ObjectId(idToDelete) }, (err, result) => {
        if (err) return err;
        return result;
    });
};

module.exports = deleteTask;
