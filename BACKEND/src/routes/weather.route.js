const express = require('express');
const router = express.Router();
const getWeatherData = require('../services/weatherService');

router.get('/', async (req, res) => {
  const { city, lat, lon } = req.query;

  try {
    const weather = await getWeatherData({ city, lat, lon });
    res.json(weather);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

module.exports = router;
