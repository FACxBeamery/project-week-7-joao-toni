const addUser = (users, newUser) => {
    return new Promise((resolve, reject) => {
        users.insertOne(newUser, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

module.exports = addUser;