const { Notice } = require("../../models");
const { NotFound } = require("http-errors");

const categoryList = ["lost-found", "in-good-hands", "sell"];

const getAll = async (req, res) => {
  const { category } = req.params;
  console.log(category);
  const { page = 1, limit = 10, keyword = "" } = req.query;
  const skip = (page - 1) * limit;

  if (!categoryList.includes(category)) {
    throw new NotFound("404, Invalid category. Your category must be one of this list: lost-found, in-good-hands, sell");
  } else {
    if (keyword === "") {
      const result = await Notice.find({ category }, "-createdAt -updatedAt").populate("owner", "email phone").sort({ updatedAt: "desc" }).skip(skip).limit(limit);

      const notices = result.map(notice => {
        return {
          _id: notice._id,
          category: notice.category,
          title: notice.title,
          name: notice.name,
          birthday: notice.birthday,
          breed: notice.breed,
          sex: notice.sex,
          city: notice.city,
          price: notice.price,
          imageURL: notice.imageURL,
          comments: notice.comments,
          email: notice.owner.email,
          phone: notice.owner.phone,
        };
      });

      res.json({
        code: 200,
        status: "success",
        data: notices,
      });
    } else {
      const result = await Notice.find({ category, title: { $regex: keyword, $options: "i" } }, "-createdAt -updatedAt")
        .populate("owner", "email phone")
        .sort({ updatedAt: "desc" })
        .skip(skip)
        .limit(limit);

      const notices = result.map(notice => {
        return {
          _id: notice._id,
          category: notice.category,
          title: notice.title,
          name: notice.name,
          birthday: notice.birthday,
          breed: notice.breed,
          sex: notice.sex,
          city: notice.city,
          price: notice.price,
          imageURL: notice.imageURL,
          comments: notice.comments,
          email: notice.owner.email,
          phone: notice.owner.phone,
        };
      });

      if (result.length === 0) {
        throw new NotFound("404, Nothing found for your request");
      }

      res.json({
        code: 200,
        status: "success",
        message: "Get notices by category or keyword",
        data: notices,
      });
    }
  }
};

module.exports = getAll;
