// routes/marketNews.route.js
const express = require("express");
const router = express.Router();
const getMarketNews = require("../services/CropNews.service");

router.get("/", async (req, res) => {
  try {
    const news = await getMarketNews();
    res.json({ news });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch market news" });
  }
});

module.exports = router;
