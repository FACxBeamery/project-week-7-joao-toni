const readUserTasks = require("../../database/queries/users/readUserTasks");
const ObjectId = require("mongodb").ObjectID;

const getUserTasks = async (req, res) => {
    let findUserById = { _id: new ObjectId(req.params.id) };

    try {
        let result = await readUserTasks(findUserById);
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json(err.message);
    }
};

module.exports = getUserTasks;
