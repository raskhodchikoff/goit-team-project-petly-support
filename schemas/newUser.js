const Joi = require("joi");
const { locationError, passwordError, phoneError, userNameError, emailError } = require("./errors");

const { passwordPattern, locationPattern, phonePattern, allLettersPattern, emailPattern } = require("./patterns");

const newUserSchema = Joi.object({
  password: Joi.string().pattern(passwordPattern).error(passwordError).required(),
  email: Joi.string().pattern(emailPattern).min(10).max(43).error(emailError).required(),
  name: Joi.string().pattern(allLettersPattern).error(userNameError).required(),
  location: Joi.string().pattern(locationPattern).error(locationError).required(),
  phone: Joi.string().pattern(phonePattern).error(phoneError).required(),
})
  .options({ abortEarly: false })
  .required();

module.exports = newUserSchema;
