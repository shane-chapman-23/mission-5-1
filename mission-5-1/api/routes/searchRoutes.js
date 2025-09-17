const express = require("express");
const router = express.Router();
const {Auction} = require("../../services/db");

router.get("/", async (req, res) => {
  try {
    const {q} = req.query;
    //If no query, returns empty array
    if (!q) {
      return res.json([]);
    }

    const searchConditions = {
      $or: [
        {title: {$regex: q, $options: i}},
        {description: {$regex: q, $options: i}},
      ],
    };

    const results = await Auction.find({searchConditions}).select(
      "title description start_price reserve_price"
    );

    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({error: "Server error"});
  }
});

module.exports = router;
