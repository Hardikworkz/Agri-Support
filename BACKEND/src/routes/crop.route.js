const express = require("express");
const router = express.Router();
const getCropSuggestions = require("../services/cropService");

router.post("/suggest", async (req, res) => {
  const { city, soil } = req.body;

  if (!city || !soil) {
    return res.status(400).json({ error: "City and soil type are required" });
  }

  try {
    const crops = await getCropSuggestions(city.toLowerCase(), soil.toLowerCase());

    if (!crops || crops.length === 0) {
      return res.status(404).json({ error: "No crop suggestions found for the given soil type." });
    }

    res.status(200).json({ crops });
  } catch (error) {
    console.error("Error fetching crop suggestions:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
