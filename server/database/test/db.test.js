const test = require("tape");
const { initDb, closeDb } = require("../dbConnection");
const {
    deleteAllTasks,
    buildTestTasks
} = require("../dbTestBuild");

test("database setup", (t) => {
    console.log("heyyy");
    
    initDb().then((db) => {
        deleteAllTasks(db)
            .then(buildTestTasks(db))
            .then(closeDb)
            .then(() => t.end());
    });
});

