const {connectDB, Auction} = require("../services/db");
const auctions = require("../data/auctions");

async function seedData() {
  await connectDB();

  try {
    await Auction.insertMany(auctions);
    console.log("Seed data inserted");
  } catch (err) {
    console.error("Seeding failed:", err);
  } finally {
    process.exit();
  }
}

module.exports = seedData;
