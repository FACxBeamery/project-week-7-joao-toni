const { getDb } = require("../../dbConnection");
const readUsers = async () => {
    try {
        const db = getDb();
        const users = db.collection("users");
        const result = await users.find({}).toArray();
        return result;
    } catch (err) {
        return err;
    }
};

module.exports = readUsers;
