const addTask = (tasks, newTask) => {
    return new Promise((resolve, reject) => {
        tasks.insertOne(newTask, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

module.exports = addTask;