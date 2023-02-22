const { User } = require("../../models");
const fs = require("fs/promises");
const { uploadImg } = require("../../helpers");

const updateAvatar = async (req, res, next) => {
  if (!req.file) {
    next();
    return;
  }

  const { path: tempUpload } = req.file;

  const { _id } = req.user;

  try {
    const result = await uploadImg(tempUpload);
    const { url: avatarURL, secure_url } = result;

    await User.findByIdAndUpdate(_id, { avatarURL }, { new: true });
    await fs.unlink(tempUpload);
    next();
  } catch (error) {
    await fs.unlink(tempUpload);
    throw error;
  }
};

module.exports = updateAvatar;
