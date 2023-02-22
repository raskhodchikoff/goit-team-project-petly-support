const { Schema, model } = require("mongoose");

const serviceSchema = Schema(
  {
    name: {
      type: String,
    },
    imageURL: {
      type: String,
    },
    time: {
      type: Object,
    },
    address: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const Service = model("service", serviceSchema);

module.exports = Service;
