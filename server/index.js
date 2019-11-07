const express = require("express");
// const formidable = require("express-formidable");
const router = require("./router.js");
const initDb = require("./database/dbConnection").initDb;
const getDb = require("./database/dbConnection").getDb;
const { seed, addSeedData } = require("./testData/seed.js");

// console.log(seed);


const app = express();
const port = process.env.PORT || 4000;

const bodyParser = (req, res, next) => {
    if (req.method === "POST") {
        let allTheData = "";
        req.on("data", chunk => {
            allTheData += chunk;
        });
        req.on("end", () => {
            try {


                req.body = JSON.parse(allTheData);
            } catch (err) {
                next();
            }
            next();
        });
    }
};

app.use(bodyParser);

app.use(router);


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