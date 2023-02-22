const { Pet } = require("../../models/index");
const { uploadImg } = require("../../helpers");

const updatePet = async (req, res, next) => {
  let newPet;
  const id = req.params.id;

  if (req.file) {
    const { path } = req.file;
    const urlImg = (await uploadImg(path)).url;

    const body = {
      ...req.body,
      urlAvatar: urlImg,
    };

    await Pet.findByIdAndUpdate(id, body);
    newPet = await Pet.findById(id);
  } else {
    await Pet.findByIdAndUpdate(id, req.body);
    newPet = await Pet.findById(id);
  }
  res.status(200).json(newPet);
};

module.exports = updatePet;
