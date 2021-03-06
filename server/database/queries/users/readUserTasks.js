const ObjectId = require("mongodb").ObjectID;
const { getDb } = require("../../dbConnection");

const readTask = require("../tasks/readTask");

const readUserTasks = async byUserIdQuery => {
    const db = getDb();
    const users = db.collection("users");

    return new Promise((resolve, reject) => {
        users.findOne(byUserIdQuery, async (err, result) => {
            if (err) reject(err);

            let tasksGroupedByDaysOfTheWeek = result.tasks;
            let daysOfTheWeekKeys = Object.keys(result.tasks);

            let detailedUserTasks = await daysOfTheWeekKeys.reduce(
                async (previousDayTasks, currentDay) => {
                    previousDayTasks = await previousDayTasks;
                    const currentDayPromises = tasksGroupedByDaysOfTheWeek[
                        currentDay
                    ].map(async taskOfCurrentDay => {
                        try {
                            let retrievedTaskDetails = await readTask({
                                _id: new ObjectId(taskOfCurrentDay.taskId)
                            });
                            let updatedTaskDetails = {
                                ...retrievedTaskDetails[0],
                                ...taskOfCurrentDay
                            };
                            return updatedTaskDetails;
                        } catch (error) {
                            console.log(error);
                        }
                    });
                    const promisesResult = await Promise.all(
                        currentDayPromises
                    );
                    return {
                        ...previousDayTasks,
                        [currentDay]: promisesResult
                    };
                },
                Promise.resolve()
            );

            resolve(detailedUserTasks);
        });
    });
};

module.exports = readUserTasks;
