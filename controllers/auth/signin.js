const { User } = require("../../models");
const { SECRET_KEY } = process.env;
const { Unauthorized } = require("http-errors");
const jwt = require("jsonwebtoken");

const signin = async (req, res, next) => {
  const { password, email: reqEmail } = req.body;

  const email = reqEmail.toLowerCase();

  const user = await User.findOne({ email });
  if (!user || !user.comparePassword(password)) {
    throw new Unauthorized("Email is wrong or not varified, or password is wrong");
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "36h" });
  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    token,
    user: {
      email: user.email,
    },
  });
};

module.exports = signin;
