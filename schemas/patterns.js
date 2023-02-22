const allLettersPattern = /^[a-zA-zа-яіїєА-ЯІЇЄ,.! ]+$/;
const locationPattern = /^[a-zA-Z]+[,][ ][a-zA-Z]+$/;
const pricePattern = /^[1-9][0-9]*$/;
const passwordPattern = /^[^ ]{7,32}$/;
const phonePattern = /^[+]{1}[0-9]{12}$/;
const emailPattern = /^([a-zA-Z0-9]{1}[a-zA-Z0-9_\-.]{1,})@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;

module.exports = {
  allLettersPattern,
  locationPattern,
  pricePattern,
  passwordPattern,
  phonePattern,
  emailPattern,
};
