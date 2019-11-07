const addTask = require("../database/queries/addTask");
const getDB = require("../database/dbConnection.js").getDb;

const createTask = async (req, res) => {
    const db = getDB();
    
    try {        
        await addTask(db.collection("tasks"), req.body);
        res.status(201).send("New Task added successfully");

    } catch(err) {
        res.status(404).json(err.message);
    }
};

module.exports = createTask;