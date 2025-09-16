const {connectDB, Auction} = require("../services/db");

async function deleteData() {
  console.log("deleteData started");
  await connectDB();
  console.log("DB connected");

  try {
    const result = await Auction.deleteMany({test_data: true});
    console.log(`Deleted ${result.deletedCount} documents`);
  } catch (err) {
    console.error("Unable to delete data: ", err);
  } finally {
    process.exit();
  }
}

module.exports = deleteData;
