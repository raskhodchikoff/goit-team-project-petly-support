const { User } = require("../../models/");

const updateUser = async (req, res, next) => {
  const { _id } = req.user;

  if (req.body.location) {
    const [city, region] = req.body.location.split(", ");

    const body = { ...req.body, city, region };

    await User.findByIdAndUpdate(_id, body, { new: true });
  } else {
    await User.findByIdAndUpdate(_id, req.body, { new: true });
  }

  const updatedUser = await User.findById(_id);

  res.json({
    message: "User has been updated",
    user: {
      _id: updatedUser._id,
      email: updatedUser.email,
      name: updatedUser.name,
      city: updatedUser.city,
      birthday: updatedUser.birthday,
      phone: updatedUser.phone,
      avatarURL: updatedUser.avatarURL,
    },
  });
};

module.exports = updateUser;
