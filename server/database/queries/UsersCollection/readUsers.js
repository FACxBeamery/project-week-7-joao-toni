const readUsers = (users) => {
    return new Promise((resolve, reject) => {
        users.find({}).toArray((err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

module.exports = readUsers;