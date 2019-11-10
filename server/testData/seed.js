const { ObjectId, MongoError } = require("mongodb");

const seed = [
    {
        title: "Beamery Product intro meeting",
        description: "Get to know more about the product",
        time: "09:00",
        taskHost: {
            name: "John Doe",
            title: "Grad Manager"
        },
        dayOfTheWeek: "Monday"
    },
    {
        title: "Meet the team",
        description: "Say hi to Engage",
        time: "11:00",
        taskHost: {
            name: "John Doe",
            title: "Grad Manager"
        },
        dayOfTheWeek: "Monday"
    },
    {
        title: "Employee Handbook Reading",
        description: "Learn about Beamery's policies and your perks",
        time: "09:00",
        taskHost: {
            name: "John Doe",
            title: "Grad Manager"
        },
        dayOfTheWeek: "Wednesday"
    },
    {
        title: "The vision, the strategy",
        description: "What we're solving, what we're building",
        time: "13:00",
        taskHost: {
            name: "John Doe",
            title: "Grad Manager"
        },
        dayOfTheWeek: "Thursday"
    },
    {
        title: "Health and Safety measures",
        description: "Learn how to proceed if there's a fire",
        time: "15:00",
        taskHost: {
            name: "John Doe",
            title: "Grad Manager"
        },
        dayOfTheWeek: "Friday"
    },
    {
        title: "Laptop set up",
        description: "Install the apps you will need",
        time: "10:00",
        taskHost: {
            name: "John Doe",
            title: "Grad Manager"
        },
        dayOfTheWeek: "Monday"
    }
];

let seedUsersData = [
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
    },
    {
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
    }
];

const parseTaskForUser = taskId => ({
    taskId,
    progress: "inprogress"
});

const addUserTask = async (db, taskToAdd) => {
    try {
        return await db.collection("tasks").insertOne(taskToAdd);
    } catch (err) {
        if (err instanceof MongoError) {
            const mongoErrorDuplicateEntry = err.code === 11000;
            if (mongoErrorDuplicateEntry)
                return {
                    ops: [
                        {
                            ...err.keyValue,
                            dayOfTheWeek: taskToAdd.dayOfTheWeek
                        }
                    ]
                };
        }
        throw err;
    }
};

const addSeedData = async db => {
    try {
        await db.collection("tasks").deleteMany({});
        await db.collection("users").deleteMany({});

        console.log("Repopulating with test data...");
        await Promise.all(
            seedUsersData.map(user => db.collection("users").insertOne(user))
        );

        const allUsersResults = await db
            .collection("users")
            .find({})
            .toArray();
        let allUsersId = allUsersResults.map(user => user["_id"]);
        allUsersId = await Promise.all(allUsersId);
        console.log("all users have resolved", allUsersId);

        allUsersId.forEach(async user => {
            await Promise.all(
                seed.map(async task => {
                    const insertTaskResult = await addUserTask(db, task);

                    let parsedTask = parseTaskForUser(
                        insertTaskResult.ops[0]["_id"]
                    );
                    let taskDay = insertTaskResult.ops[0]["dayOfTheWeek"];
                    let newValues = {
                        $push: { [`tasks.${taskDay}`]: parsedTask }
                    };

                    return db
                        .collection("users")
                        .updateOne({ _id: new ObjectId(user) }, newValues);
                })
            );
            console.log("Finished adding all tasks for user", user);
        });
    } catch (err) {
        console.error(err);
    }
};

module.exports = { seed, addSeedData };
