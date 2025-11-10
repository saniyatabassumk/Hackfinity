const express = require("express");
const multer = require("multer");
const Waste = require("../models/WasteRecord");
const User = require("../models/User");
const router = express.Router();

// 🧩 Configure Multer for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

// 🧠 AI Waste Prediction (Mocked for now)
function predictWasteType() {
  const types = ["Biodegradable", "Recyclable", "Hazardous"];
  return types[Math.floor(Math.random() * types.length)];
}

// 📤 Upload waste image and predict
router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const userId = req.body.userId || "guest"; // replace with JWT later
    const prediction = predictWasteType();

    const record = await Waste.create({
      userId,
      image: req.file.path,
      category: prediction,
    });

    res.json({
      message: "✅ Waste uploaded successfully",
      category: prediction,
      data: record,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📜 Fetch all uploaded waste records
router.get("/all", async (req, res) => {
  try {
    const records = await Waste.find();
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
