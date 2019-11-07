const Joi = require("joi");
const taskSchema = Joi.object().keys({
    title: Joi.string().required(), 
    description: Joi.string().required(),
    time: Joi.string().regex(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/).required(),
    taskHost: Joi.object().keys({
        name: Joi.string().required(),
        title: Joi.string().required()
    }),
    progress: Joi.string().regex(/(inprogress|complete)/).required()}); 
module.exports = taskSchema;