const { getDb } = require("../../dbConnection");
const addUser = newUser => {
    const db = getDb();
    const users = db.collection("users");
    users.insertOne(newUser, (err, result) => {
        if (err) return err;
        return result;
    });
};

module.exports = addUser;
