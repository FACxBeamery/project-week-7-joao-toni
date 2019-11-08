const test = require("tape");
const { initDb, closeDb } = require("../dbConnection");
const {
    deleteAllTasks,
    buildTestTasks
} = require("../dbTestBuild");
const app = require("../../router");
var request = require("supertest");

console.log("IM TESTING EHRE!!!");


test("testing /tasks endpoint", async (t) => {
    try {
        
        let db = await initDb();
        console.log("===========");
        console.log("DB INITIALISED");
        
        console.log("===========");
        
        await deleteAllTasks(db);
        console.log("===========");
        console.log("DB DELETED");
        console.log("===========");
        await buildTestTasks(db);
        console.log("===========");
        console.log("DB RE BUILT");
        console.log("===========");
        try {
            let response = await request(app)
                .get("/tasks")
                .expect("Content-Type", /json/)
                .expect(200);
            t.equal(response.body.length, 6);
        } catch (error) {
            console.log(error);   
        }
        await closeDb();
        console.log("===========");
        console.log("DB CLOSED");
        console.log("===========");
        await t.end();
    } catch (err) {
        console.log(err);
        
    }
});