const bodyParser = (req, res, next) => {
    if (req.method === "POST") {
        let allTheData = "";
        req.on("data", chunk => {
            allTheData += chunk;
        });
        req.on("end", () => {
            try {
             
                
                req.body = JSON.parse(allTheData);
            } catch (err) {
                next();
            }
            next();
        });
    }
};

module.exports = bodyParser;