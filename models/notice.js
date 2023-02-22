const { Schema, model } = require("mongoose")

const noticeSchema = Schema(
  {
    category: {
      type: String,
      enum: ["lost-found", "in-good-hands", "sell"],
      required: true,
    },
    title: {
      type: String,
      required: [true, "Set title for notice"],
    },
    name: {
      type: String,
      default: "no name",
    },
    birthday: {
      type: String,
      default: "",
    },
    breed: {
      type: String,
      default: "",
    },
    sex: {
      type: String,
      enum: ["male", "female", ""],
      default: "",
      required: [true, "Sex is required"],
    },
    city: {
      type: String,
    },
    region: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    imageURL: {
      type: String,
      default:
        "https://res.cloudinary.com/dv7t2zcqq/image/upload/v1675701400/cat_dog_blank_nknppv.jpg",
    },
    comments: {
      type: String,
      required: [true, "Comment is required"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
)

const Notice = model("notice", noticeSchema)

module.exports = Notice
