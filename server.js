// 🌿 EcoSort Smart Backend
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // To load environment variables

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON data

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Import routes
const wasteRoutes = require("./routes/wasteRoutes");
app.use("/api/waste", wasteRoutes); // 👈 Connects waste upload API
app.use("/uploads", express.static("uploads"));

// ✅ Basic route to test backend
app.get("/", (req, res) => {
  res.send("🌍 EcoSort Backend is running successfully!");
});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
