const express = require("express");
const router = require("./router.js");
const {initDb, getDb} = require("./database/dbConnection");
const { addSeedData } = require("./testData/seed.js");

const app = express();
const port = process.env.PORT || 4000;

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

module.exports = app;