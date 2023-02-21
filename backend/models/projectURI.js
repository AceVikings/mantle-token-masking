const mongoose = require("mongoose");

const projectURI = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  contract: {
    type: String,
    required: true,
    unique: true,
  },
  cid: {
    type: String,
    required: true,
  },
  default: {
    type: String,
  },
});

module.exports = mongoose.model("project", projectURI);
