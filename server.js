const app = require("./app");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;

const { DB_HOST, CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_API_KEY,
  api_secret: CLOUD_API_SECRET,
  secure: true,
});

const PORT = process.env.PORT || 3001;

mongoose.set("strictQuery", false);

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Database connection successful with port: ${PORT}`);
    })
  )
  .catch(err => {
    console.log(err.message);
    process.exit(1);
  });
