const ObjectId = require("mongodb").ObjectID;

const readTask = require("../readTask");

const readUserTasks = (users, findByUserId, tasks) => {
    return new Promise((resolve, reject) => {
        users.findOne(findByUserId, (err, result) => {
            if (err) reject(err);

            let days = Object.keys(result.tasks);

            result.tasks = days.map(day => {
                let updatedTasksForDay = result.tasks[day]
                    .map(task => {
                        return readTask(tasks, { _id: new ObjectId(task.taskId) })
                            .then((taskResult) => {
                                let updatedUserTask = { ...taskResult[0], ...task };
                                return updatedUserTask;
                            })
                            .catch((err) => console.error(err));
                    });

                console.log(updatedTasksForDay);


                return Promise.all(updatedTasksForDay).then(() => updatedTasksForDay);

            });

            Promise.all(result.tasks).then(() => resolve(result.tasks));

        });
    });
};

module.exports = readUserTasks;