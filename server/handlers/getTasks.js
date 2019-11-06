const readTasks = require("../database/queries/readTasks");
const getDB = require("../database/dbConnection.js").getDb;

const getTasks = (req, res) => {
    const db = getDB();

    readTasks(db.collection("tasks"))
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(404).json(err.message));
};

module.exports = getTasks;