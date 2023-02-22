const Joi = require("joi").extend(require("@joi/date"));
const { locationError, phoneError, userNameError } = require("./errors");

const { locationPattern, phonePattern, allLettersPattern } = require("./patterns");

const updatedUserSchema = Joi.object({
  name: Joi.string().pattern(allLettersPattern).error(userNameError),
  email: Joi.string().email(),
  birthday: Joi.date().min("1-1-1900").max("now").format(["DD.MM.YYYY"]).utc(),
  phone: Joi.string().pattern(phonePattern).error(phoneError),
  location: Joi.string().pattern(locationPattern).error(locationError),
});

module.exports = updatedUserSchema;
