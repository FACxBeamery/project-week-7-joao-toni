const express = require("express");
// const formidable = require("express-formidable");
const router = require("./router.js");
const initDb = require("./database/dbConnection").initDb;
const getDb = require("./database/dbConnection").getDb;


let seed = [
    {
        title: "Beamery Product intro meeting",
        description: "Get to know more about the product",
        time: "09:00",
        taskWith: {
            name: "John Doe",
            position: "Grad Manager"
        },
        progress: "inprogress",
        dayOfTheWeek: "Monday"
    },
    {

        title: "Meet the team",
        description: "Say hi to Engage",
        time: "11:00",
        taskWith: {
            name: "John Doe",
            position: "Grad Manager"
        },
        progress: "inprogress",
        dayOfTheWeek: "Monday"
    },
    {

        title: "Employee Handbook Reading",
        description: "Learn about Beamery's policies and your perks",
        time: "09:00",
        taskWith: {
            name: "John Doe",
            position: "Grad Manager"
        },
        progress: "inprogress",
        dayOfTheWeek: "Wednesday"
    },
    {

        title: "The vision, the strategy",
        description: "What we're solving, what we're building",
        time: "13:00",
        taskWith: {
            name: "John Doe",
            position: "Grad Manager"
        },
        progress: "inprogress",
        dayOfTheWeek: "Thursday"
    },
    {

        title: "Health and Safety measures",
        description: "Learn how to proceed if there's a fire",
        time: "15:00",
        taskWith: {
            name: "John Doe",
            position: "Grad Manager"
        },
        progress: "inprogress",
        dayOfTheWeek: "Friday"
    },
    {

        title: "Laptop set up",
        description: "Install the apps you will need",
        time: "10:00",
        taskWith: {
            name: "John Doe",
            position: "Grad Manager"
        },
        progress: "inprogress",
        dayOfTheWeek: "Monday"
    },

];

const app = express();
const port = process.env.PORT || 3000;
// app.use(formidable());

app.use(router);

initDb()
    .then(() => {

        let db = getDb();

        db.collection("tasks").drop((err, delOK) => {
            if (err) throw err;
            if (delOK) console.log("Collection deleted");
        });


        seed.map(async (task) => {
            try {
                await db.collection("tasks").insertOne(task, (err, result) => {
                    if (err) throw (err);
                    return (result);
                });
            }
            catch (err) {
                console.error(err);
            }
        });

        app.listen(port, () => {
            console.log(`Server listening on port ${port}. Ready to accept requests!`);
        });
    })
    .catch(console.error);