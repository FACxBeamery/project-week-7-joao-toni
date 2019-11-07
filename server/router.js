const express = require("express");

const getTasks = require("./handlers/getTasks.js");
const createTask = require("./handlers/createTask.js");

const taskValidator = require("./middleware/taskValidator");

const router = express();

router.get("/tasks", getTasks);

router.post("/tasks", taskValidator(true), createTask);

module.exports = router;