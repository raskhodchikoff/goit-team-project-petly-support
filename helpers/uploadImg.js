const cloudinary = require("cloudinary").v2;
const { BadRequest } = require("http-errors");

const uploadImg = async imagePath => {
  try {
    const result = await cloudinary.uploader.upload(imagePath);

    return {
      url: result.url,
      secure_url: result.secure_url,
    };
  } catch (error) {
    throw new BadRequest(error);
  }
};

module.exports = uploadImg;
