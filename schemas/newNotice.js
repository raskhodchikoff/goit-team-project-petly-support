const Joi = require("joi").extend(require("@joi/date"));

const { allLettersPattern, locationPattern, pricePattern } = require("./patterns");
const { titleError, nameError, breedError, locationError, priceError } = require("./errors");

const newNoticeSchema = Joi.object({
  category: Joi.string().valid("lost-found", "in-good-hands", "sell").required(),
  title: Joi.string().min(2).max(48).pattern(allLettersPattern).error(titleError).required(),
  name: Joi.string().min(2).max(16).pattern(allLettersPattern).error(nameError),
  birthday: Joi.date().min("1-1-1900").max("now").format(["DD.MM.YYYY"]).utc(),
  breed: Joi.string().min(2).max(24).pattern(allLettersPattern).error(breedError),
  sex: Joi.string().valid("male", "female"),
  location: Joi.string().min(4).max(60).pattern(locationPattern).error(locationError).required(),
  price: Joi.string().min(1).pattern(pricePattern).error(priceError),
  imgURL: Joi.string(),
  comments: Joi.string().min(8).max(120).required(),
}).required();

module.exports = newNoticeSchema;
