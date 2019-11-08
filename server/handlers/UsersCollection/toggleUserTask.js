const { getDb } = require("../../database/dbConnection.js");
const toggleTaskComplete = require("../../database/queries/UsersCollection/toggleUserTask");


// get toggleTaskComplete
const toggleTask = async (req, res) => {
    try {
        let db = getDb();
        const { id } = req.params;
        const { dayOfTask, taskID } = req.body;
        const { data } = await toggleTaskComplete(db.collection("users"), id, dayOfTask, taskID);
        res.status(200).json(data);

    } catch (err) {
        res.status(404).json(err.message);
    }

};

module.exports = toggleTask;