const readUserTasks = (users, findByUserId) => {
    return new Promise((resolve, reject) => {
        users.find(findByUserId, (err, result) => {
            if (err) reject(err);
            resolve(result.tasks);
        });
    });
};

module.exports = readUserTasks;