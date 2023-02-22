const titleError = new Error(`The title must be between 2 and 48 characters long and can contain any letter character`);
const nameError = new Error(`The name must be between 2 and 16 characters long and can contain any letter character`);
const userNameError = new Error(`The name can contain only letters`);
const breedError = new Error(`The breed must be between 2 and 24 characters long and can contain any letter character`);
const locationError = new Error(`The location should consist of two parts (city, region) separated by a comma and a space, like this: "Brovary, Kiev"`);
const passwordError = new Error(`The password must be between 7 and 32 characters long and can contain any character except spaces`);
const phoneError = new Error(`The phone number must be in the following format: "+380XXXXXXXXX"`);
const priceError = new Error(`The price should not start from "0"`);
const emailError = new Error(`The email must be valid`);

module.exports = {
  titleError,
  nameError,
  userNameError,
  breedError,
  locationError,
  passwordError,
  phoneError,
  priceError,
  emailError,
};
