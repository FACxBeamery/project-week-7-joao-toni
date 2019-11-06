

const createTask = async (req, res) => {
    
    try {
        const {data} = await addTask(db.collection("tasks"), req.body);
        res.status(201).json(data);

    } catch(err) {
        res.status(404).json(err.message);
    }
};


// in router
// app.get("/users", taskValidator, createTask); 