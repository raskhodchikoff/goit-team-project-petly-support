const { Service } = require("../../models");

const getAll = async (req, res, next) => {
  const Services = await Service.find().sort({ _id: 1 });

  res.status(200).json(Services);
};

module.exports = getAll;
