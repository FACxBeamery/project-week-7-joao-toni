const addUser = require("../../database/queries/UsersCollection/addUser.js");
const getDB = require("../../database/dbConnection.js").getDb;

const createUser = async (req, res) => {
    const db = getDB();
    addUser(db.collection("users"))
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(404).json(err.message));
};


module.exports = createUser;

// in router
// app.post("/addUser", createUser); 