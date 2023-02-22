const { News } = require("../../models");

const getAll = async (req, res, next) => {
  const getNews = await News.find();

  res.status(200).json(getNews);
};

module.exports = getAll;
