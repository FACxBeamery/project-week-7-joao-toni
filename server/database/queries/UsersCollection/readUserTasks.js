const ObjectId = require("mongodb").ObjectID;

const readTask = require("../readTask");

const readUserTasks = (users, findByUserId, tasks) => {
    return new Promise((resolve, reject) => {
        users.findOne(findByUserId, async (err, result) => {
            if (err) reject(err);

            let days = Object.keys(result.tasks);

            let updatedTasks = await days.reduce(
                async (previousBatch, currentDay, index) => {
                    previousBatch = await previousBatch;
                    console.log();

                    console.log(`Processing batch ${index}...`);

                    const currentDayPromises = result.tasks[currentDay]
                        .map(task => readTask(tasks, { _id: new ObjectId(task.taskId) })
                            .then((taskResult) => {
                                let updatedUserTask = { ...taskResult[0], ...task };
                                return updatedUserTask;
                            })
                            .catch((err) => console.error(err)));

                    const promisesResult = await Promise.all(currentDayPromises);
                    console.log(promisesResult);
                    return { ...previousBatch, [currentDay]: promisesResult };
                }, Promise.resolve());

            console.log(updatedTasks);

            resolve(updatedTasks);

        });
    });
};

module.exports = readUserTasks;