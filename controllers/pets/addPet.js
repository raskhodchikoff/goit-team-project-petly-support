const { Pet } = require("../../models/index");
const { uploadImg } = require("../../helpers");

const addPet = async (req, res, next) => {
  const { _id } = req.user;

  let newPet;

  if (req.file) {
    const { path } = req.file;
    const urlImg = (await uploadImg(path)).url;

    newPet = await Pet.create({
      ...req.body,
      urlAvatar: urlImg,
      ref: _id,
    });
  } else {
    newPet = await Pet.create({
      ...req.body,
      ref: _id,
    });
  }
  res.status(201).json(newPet);
};

module.exports = addPet;
