const ObjectId = require("mongodb").ObjectId;

const deleteTask = (tasks, idToDelete) => {
    return new Promise((resolve, reject) => {
        tasks.deleteOne(
            { _id: ObjectId(idToDelete) },
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            }
        );
    });
};

module.exports = deleteTask;