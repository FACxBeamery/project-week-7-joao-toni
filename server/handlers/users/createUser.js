const addUser = require("../../database/queries/users/addUser.js");

const createUser = async (req, res) => {
    try {
        let { body } = req;
        let userToCreate = body;
        console.log(userToCreate);
        await addUser(userToCreate);
        res.status(201).send("New User added successfully");
    } catch (err) {
        console.log(err);
        res.status(404).json(err.message);
    }
};

module.exports = createUser;
