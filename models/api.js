const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apiSchema = new Schema({
  key: {
    type: String,
    required: true,
    unique: true,
  },
  value: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("Sims", apiSchema);