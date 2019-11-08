const express = require("express");
// const formidable = require("express-formidable");
const router = require("./router.js");
const initDb = require("./database/dbConnection").initDb;
const getDb = require("./database/dbConnection").getDb;
const { addSeedData } = require("./testData/seed.js");

const bodyParser = require("./middleware/bodyParser");

// console.log(seed);

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser);
app.use(router);

router.get("/tasks", () => console.log("r"));


initDb()
    .then(() => {

        let db = getDb();

        // TODO Only for development
        addSeedData(db);


        app.listen(port, () => {
            console.log(`Server listening on port ${port}. Ready to accept requests!`);
        });
    })
    .catch(console.error);