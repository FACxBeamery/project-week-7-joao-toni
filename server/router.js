const express = require("express");
const getTasks = require("./handlers/getTasks.js");

const router = express();

router.get("/getTasks", getTasks);

module.exports = router;