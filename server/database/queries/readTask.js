
const readTask = (tasks, taskId) => {
    return new Promise((resolve, reject) => {
        tasks.find(taskId).toArray((err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

module.exports = readTask;