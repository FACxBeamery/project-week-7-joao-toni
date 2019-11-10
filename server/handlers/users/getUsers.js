const readUsers = require("../../database/queries/users/readUsers");

const getUsers = async (req, res) => {
    try {
        let result = await readUsers();
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json(err.message);
    }
};

module.exports = getUsers;
