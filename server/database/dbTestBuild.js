const { seed } = require("../testData/seed");

const deleteAllTasks = (db) => db.collection("tasks").deleteMany({});

const buildTestTasks = (db) => db.collection("tasks").insertMany(seed);

module.exports = { deleteAllTasks, buildTestTasks };
