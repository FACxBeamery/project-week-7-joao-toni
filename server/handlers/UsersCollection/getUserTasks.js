const readUserTasks = require("../../database/queries/UsersCollection/readUserTasks");
const getDB = require("../../database/dbConnection.js").getDb;

const getUserTasks = (req, res) => {
    console.log(req);
    console.log(req.params.id);
    const db = getDB();

    let findUserById = { _id: req.params.id };

    readUserTasks(db.collection("users"), findUserById)
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(404).json(err.message));
};

module.exports = getUserTasks;