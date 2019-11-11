const addUser = require("../../database/queries/users/addUser.js");

const createUser = async (req, res) => {
    try {
        let { body } = req;
        let userToCreate = body;
        await addUser(userToCreate);
        res.status(201).send("New User added successfully");
    } catch (err) {
        res.status(404).json(err.message);
    }
};

module.exports = createUser;
