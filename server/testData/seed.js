const seed = [
    {
        title: "Beamery Product intro meeting",
        description: "Get to know more about the product",
        time: "09:00",
        taskWith: {
            name: "John Doe",
            title: "Grad Manager"
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
            title: "Grad Manager"
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
            title: "Grad Manager"
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
            title: "Grad Manager"
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
            title: "Grad Manager"
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
            title: "Grad Manager"
        },
        progress: "inprogress",
        dayOfTheWeek: "Monday"
    },
];

let seedUserData = [
    {
        person: {
            name: "Paul",
            title: "Graduate"
        },
        tasks: {
            Monday: [],
            Tuesday: [],
            Wednesday: [],
            Thursday: [],
            Friday: []
        }
    }
];

const addUserTask = (taskId) => ({
    taskId, progress: "inprogress"
});

const addSeedData = async (db) => {
    try {
        db.collection("tasks").deleteMany({}, (err, delOK) => {
            if (err) throw err;
            if (delOK) console.log("Collection emptied");
        });
        db.collection("users").deleteMany({}, (err, delOK) => {
            if (err) throw err;
            if (delOK) console.log("Collection emptied");
        });

        console.log("Repopulating with test data...");

        await seedUserData.map((user) => {
            db.collection("users").insertOne(user, (err, result) => {
                if (err) throw (err);
                return (result.ops[0]);
            });
        });

        let defaultUserId;
        db.collection("users").find({}).toArray((err, result) => {
            defaultUserId = result[0]["_id"];
        });

        seed.map((task) => {
            db.collection("tasks").insertOne(task, (err, result) => {
                if (err) throw (err);

                let paulsTask = addUserTask(result.ops[0]["_id"]);
                console.log(paulsTask);
                let taskDay = result.ops[0]["dayOfTheWeek"];
                console.log(taskDay);
                let newValues = { $push: { [`tasks.${taskDay}`]: paulsTask } };
                console.log("updating user");

                db.collection("users").updateOne({ _id: defaultUserId },
                    newValues,
                    (err, result) => {
                        if (err) throw (err);

                        db.collection("users").find({}).toArray((err, result) => {
                            console.log(result[0]);
                        });
                        return result;
                    });

                return (result.ops[0]);
            });
        });


    } catch (err) {
        console.error(err);
    }
};

module.exports = { seed, addSeedData };