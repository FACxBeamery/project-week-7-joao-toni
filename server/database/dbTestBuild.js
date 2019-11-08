const { seed } = require("../testData/seed");

const deleteAllTasks = (db) => db.collection("tasks").drop();

const buildTestTasks = (db) => db.collection("tasks").insertMany(seed);

module.exports = { deleteAllTasks, buildTestTasks };
