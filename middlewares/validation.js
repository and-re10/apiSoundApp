const Joi = require('@hapi/joi');

const registerValidation = data => {
    const schema = {
        userName: Joi.string().required(),
        userPhone: Joi.string().min(6).max(15).required(),
        userPassword: Joi.string().min(6).required(),
        pushToken: Joi.string().required()
    }

    return Joi.validate(data, schema)
}

const loginValidation = data => {
    const schema = {
        userPhone: Joi.string().min(6).max(15).required(),
        userPassword: Joi.string().min(6).required()
    }

    return Joi.validate(data, schema)
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;