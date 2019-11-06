const express = require("express");
const addTask = require("./handlers/addTask.js");
const taskValidator = require("./middleware/taskValidator");

const router = express();

router.use(express.static("public"));


// router.get("/tasks", getTasks);

// router.post("/tasks", addTask);

// app.get("/users", taskValidator, createTask); 

router.post("/tasks", taskValidator,addTask);

router.patch("/tasks", editQuestion);

module.exports = router;