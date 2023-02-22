const Joi = require("joi");

const { passwordError, emailError } = require("./errors");

const { passwordPattern, emailPattern } = require("./patterns");

const loginUserSchema = Joi.object({
  password: Joi.string().pattern(passwordPattern).error(passwordError).required(),
  email: Joi.string().pattern(emailPattern).min(10).max(43).error(emailError).required(),
}).required();

module.exports = loginUserSchema;
