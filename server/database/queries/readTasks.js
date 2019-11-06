
const readTasks = (tasks) => {
    return new Promise((resolve, reject) => {
        tasks.find({}).toArray((err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

module.exports = readTasks;