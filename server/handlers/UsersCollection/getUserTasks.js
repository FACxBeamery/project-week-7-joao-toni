const readUserTasks = require("../../database/queries/UsersCollection/readUserTasks");
const getDB = require("../../database/dbConnection.js").getDb;

const ObjectId = require("mongodb").ObjectID;

const getUserTasks = async (req, res) => {
    const db = getDB();

    let findUserById = { _id: new ObjectId(req.params.id) };

    try {
        let result = await readUserTasks(db.collection("users"), findUserById, db.collection("tasks"));
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json(err.message);
    }
};

module.exports = getUserTasks;