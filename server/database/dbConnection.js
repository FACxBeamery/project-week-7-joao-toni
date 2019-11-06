const mongo = require("mongodb").MongoClient;

let _db;
let _client;

let dbUrl;

if (process.env.NODE_ENV === "development") {
    dbUrl = process.env.MONGO_URI_TEST || "mongodb://db:27017/test";
} else {
    dbUrl = process.env.MONGO_URI || "mongodb://db:27017/db";
}

const dbConfig = { useNewUrlParser: true, useUnifiedTopology: true };

const initDb = () => {
    return new Promise((resolve, reject) => {
        const connected = (err, client) => {
            if (err) {
                reject(err);
            }
            console.log("DB initialized");
            _client = client;
            _db = client.db("gradTasks");
            resolve(_db);
        };

        if (_db) {
            console.warn("Trying to init DB again!");
            resolve(_db);
        }

        mongo.connect(dbUrl, dbConfig, connected);
    });
};

const getDb = () => {
    if (!_db) {
        throw new Error("Db has not been initialized, please call init first!");
    } else {
        return _db;
    }
};

const closeDb = () => {
    _db = null;

    return _client.close();
};

module.exports = { initDb, getDb, closeDb };