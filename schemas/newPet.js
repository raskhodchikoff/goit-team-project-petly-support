const Joi = require("joi").extend(require("@joi/date"));
const { allLettersPattern } = require("./patterns");
const { nameError, breedError } = require("./errors");

const newPetSchema = Joi.object({
  name: Joi.string().min(2).max(16).pattern(allLettersPattern).error(nameError).required(),
  breed: Joi.string().min(2).max(24).pattern(allLettersPattern).error(breedError).required(),
  comments: Joi.string().min(8).max(120).required(),
  date: Joi.date().min("1-1-1900").max("now").format(["DD.MM.YYYY"]).utc(),
});

module.exports = newPetSchema;
