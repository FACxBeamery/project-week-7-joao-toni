const express = require("express");

const getTasks = require("./handlers/getTasks.js");
const createTask = require("./handlers/createTask.js");

const toggleUserTask = require("./handlers/UsersCollection/toggleUserTask.js");
const getUserTasks = require("./handlers/UsersCollection/getUserTasks");
const createUser = require("./handlers/UsersCollection/createUser");
const getUsers = require("./handlers/UsersCollection/getUsers.js");

const taskValidator = require("./middleware/taskValidator");
const bodyParser = require("./middleware/bodyParser");

const router = express();

router.get("/tasks", getTasks);
router.post("/tasks", [taskValidator(true), bodyParser], createTask); 
router.get("/users", getUsers);
router.post("/addUser", createUser);
router.get("/users/:id", getUserTasks);
router.patch("/users/:id", toggleUserTask);

module.exports = router;