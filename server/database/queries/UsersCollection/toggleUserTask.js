const { ObjectId } = require("mongodb");

const mapTaskProgressToggles = {
    "inprogress": "complete",
    "complete": "inprogress"
};

const toggleUserTask = (users, userIdToUpdate, dayOfTask, taskID) => {
    let findTaskInUsersQuery = {
        _id: new ObjectId(userIdToUpdate),
        [`tasks.${dayOfTask}.taskId`]: new ObjectId(taskID)
    };

    return new Promise((resolve, reject) => {
        users.findOne(
            findTaskInUsersQuery,
            (err, result) => {
                if (err) reject(err);
                try {
                    let tasksForDay = result.tasks[dayOfTask];
                    let taskToUpdate;

                    tasksForDay.some((task) => {
                        let doesTaskIdMatchTaskToUpdate = task.taskId.toString() === taskID;
                        if (doesTaskIdMatchTaskToUpdate) {
                            taskToUpdate = task;
                            return true;
                        }
                    });

                    let updateTaskProgressQuery = {
                        $set: {
                            [`tasks.${dayOfTask}.$.progress`]: mapTaskProgressToggles[taskToUpdate["progress"]]
                        }
                    };

                    users.updateOne(
                        findTaskInUsersQuery,
                        updateTaskProgressQuery,
                        (err) => {
                            if (err) reject(err);
                            users.findOne(
                                findTaskInUsersQuery,
                                (err, result) => {
                                    if (err) reject(err);
                                    resolve({ data: result.tasks });
                                }
                            );
                        }
                    );

                } catch (err) {
                    if (err instanceof TypeError) {
                        console.error("#### CAUGHT ERROR -");
                        console.error(err);
                        reject({ message: `No user or task found for user id '${userIdToUpdate}'` });
                    }
                    else reject(err);
                }
            }
        );
    });
};

module.exports = toggleUserTask;