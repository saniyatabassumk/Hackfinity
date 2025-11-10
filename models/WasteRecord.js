const mongoose = require("mongoose");

const wasteSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  image: String, // path to uploaded image
  category: String, // biodegradable / recyclable / hazardous
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("WasteRecord", wasteSchema);
