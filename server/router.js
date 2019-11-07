const express = require("express");
const getTasks = require("./handlers/getTasks.js");

const router = express();

router.get("/tasks", getTasks);

module.exports = router;