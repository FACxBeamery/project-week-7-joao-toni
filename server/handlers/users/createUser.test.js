
const { initDb, closeDb } = require("../../database/dbConnection");
const {
    deleteAllTasks,
    buildTestTasks
} = require("../../database/dbTestBuild");
const assert = require("assert");

const express = require("express");
const supertest = require("supertest");
const router = require("../../router");
const app = express();
const bodyParser = require("../../middleware/bodyParser");

describe("POST /", function () {

    let data = {
        person: {
            name: "Tim",
            title: "Graduate"
        },
        tasks: {
            Monday: [],
            Tuesday: [],
            Wednesday: [],
            Thursday: [],
            Friday: []
        }
    };


    app.use(bodyParser);
    app.use(router);
    it("it shoud return status code 201 to indicate user was created", async function () {
        try {
            let db = await initDb();

            await deleteAllTasks(db);
            await buildTestTasks(db);

            return supertest(app)
                .post("/users")
                .send(data)
                .then(response => {

                    assert.equal(201, response.statusCode);
                    assert.equal("text/html", response.type);
                    assert.equal(response.text, "New User added successfully");

                    closeDb();
                });


        } catch (err) {
            console.log(err);
        }
    });
});
