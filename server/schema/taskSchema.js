const Joi = require("joi"); 

const taskSchema = 
    Joi.object().keys({      
        title: Joi.string().required(),
        description: Joi.string().required(),
        time: Joi.string().regex(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/).required(),
        name: Joi.string().required(),
        taskHost: Joi.object().keys({
            name: Joi.string().required(),
            title: Joi.string().required()
        }),
        progress: Joi.string().required()
    }); 

module.exports = taskSchema;