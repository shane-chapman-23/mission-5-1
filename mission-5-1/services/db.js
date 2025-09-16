const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/auctiondb");
    console.log("MongoDB connected!");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }
}

const auctionSchema = new mongoose.Schema({
  title: String,
  description: String,
  start_price: Number,
  reserve_price: Number,
  test_data: Boolean,
});

const Auction = mongoose.model("Auction", auctionSchema);

module.exports = {connectDB, Auction};
