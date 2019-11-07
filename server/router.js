const express = require("express");

const getTasks = require("./handlers/getTasks.js");
// const createTask = require("./handlers/createTask.js");
// const getUserTasks = require("./handlers/UsersCollection/getUserTasks");
// const createUser = require("./handlers/UsersCollection/createUser");

// const taskValidator = require("./middleware/taskValidator");

const router = express();

router.get("/tasks", getTasks);
// router.post("/tasks", taskValidator(true), createTask);

// router.get("/users/:id", getUserTasks);
// router.post("/addUser", createUser);

module.exports = router;