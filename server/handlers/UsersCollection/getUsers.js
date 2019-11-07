const readUsers = require("../../database/queries/UsersCollection/readUsers");
const getDB = require("../../database/dbConnection.js").getDb;


const getUsers = async (req, res) => {
    const db = getDB();

    try {
        let result = await readUsers(db.collection("users"));
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json(err.message);
    }
};

module.exports = getUsers;