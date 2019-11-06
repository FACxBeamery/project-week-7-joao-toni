const ObjectId = require("mongodb").ObjectId;
const editTask = (tasks, idToUpdate, action) => {
    return new Promise((resolve, reject) => {
        tasks.updateOne(
            { _id: ObjectId(idToUpdate) },
            { $push: { progress: action } },
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            }
        );
    });
};

module.exports = editTask;