const express = require("express");
const router = express.Router();
const getMandiPrices = require("../services/mandi.service");

router.get("/", async (req, res) => {
  const crop = req.query.crop;
  if (!crop) {
    return res.status(400).json({ error: "Crop query parameter is required" });
  }

  try {
    const prices = await getMandiPrices(crop);
    res.json({ prices });
  } catch (error) {
    console.error("❌ Mandi API Error:", error.message);
    res.status(500).json({ error: "Failed to fetch mandi prices" });
  }
});

module.exports = router; 
