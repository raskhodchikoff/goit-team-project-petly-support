const { Schema, model, SchemaTypes } = require("mongoose");

const petSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name your pets"],
    },
    breed: {
      type: String,
      required: [true, "Field breed is requred!"],
    },
    comments: {
      type: String,
      required: [true, "A few words about your pets"],
    },
    date: {
      type: String,
      required: [true, "Date should be DD.MM.YYYY"],
    },
    urlAvatar: {
      type: String,
      default:
        "https://res.cloudinary.com/dv7t2zcqq/image/upload/v1675701400/cat_dog_blank_nknppv.jpg",
    },
    ref: {
      type: SchemaTypes.ObjectId,
      ref: "users",
    },
  },
  { versionKey: false, timestamps: true }
);

const Pet = model("pet", petSchema);

module.exports = Pet;
