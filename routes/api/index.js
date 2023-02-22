const authRouter = require("./auth");
const userRouter = require("./user");
const petsRouter = require("./pets");
const servicesRouter = require("./services");
const newsRouter = require("./news");
const noticesRouter = require("./notices");

module.exports = {
  authRouter,
  servicesRouter,
  newsRouter,
  userRouter,
  noticesRouter,
  petsRouter,
};
