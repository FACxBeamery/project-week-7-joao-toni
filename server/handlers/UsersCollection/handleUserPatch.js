const toggleUserTask = require("./toggleUserTask");


const handleUserPatch = async (req, res) => {
    const { action } = req.body;

    const actionIsToggle = action === "toggleTask";

    if (actionIsToggle) {
        await toggleUserTask(req, res);
    }
};

module.exports = handleUserPatch;