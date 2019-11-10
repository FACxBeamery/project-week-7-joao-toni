const express = require("express");

const getTasks = require("./handlers/tasks/getTasks.js");
const createTask = require("./handlers/tasks/createTask.js");

const toggleUserTask = require("./handlers/users/toggleUserTask.js");
const getUserTasks = require("./handlers/users/getUserTasks");
const createUser = require("./handlers/users/createUser");
const getUsers = require("./handlers/users/getUsers.js");

const taskValidator = require("./middleware/taskValidator");

const router = express();

router.get("/tasks", getTasks);
router.post("/tasks", taskValidator(true), createTask);
router.get("/users", getUsers);
router.post("/users", createUser);
router.get("/users/:id", getUserTasks);
router.patch("/users/:id", toggleUserTask);

module.exports = router;
