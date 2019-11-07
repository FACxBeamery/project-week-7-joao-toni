const taskSchema = require("../schema/taskSchema");

const Joi = require("joi"); 

const taskValidator = (useJoiError) => {

    // Joi validation options
    const _validationOptions = {
        abortEarly: false, // abort after the last validation error
        allowUnknown: true, // allow unknown keys that will be ignored
        stripUnknown: true // remove unknown keys from the validated data
    };

    // return the validation middleware
    return (req, res, next) => {
        if (taskSchema && req.body) {

            // Validate req.body using the schema and validation options
            return Joi.validate(req.body, taskSchema, _validationOptions, (err, data) => {

                if (err) {

                    // Joi Error
                    const joiError = {
                        status: "failed",
                        error: {
                            original: err._object,

                            // fetch only message and type from each error
                            details: err.details.map(({message, type}) => ({
                                message: message.replace(/['"]/g, ""),
                                type
                            }))
                        }
                    };

                    // Custom Error
                    const customError = {
                        status: "failed",
                        error: "Invalid request data. Please review request and try again."
                    };

                    // Send back the JSON error response
                    res.status(422).json(useJoiError? joiError : customError);

                } else {
                    
                    // Replace req.body with the data after Joi validation
                    req.body = data;
                    next();
                }
            });
        }
        // next();
    };
};

module.exports = taskValidator;

