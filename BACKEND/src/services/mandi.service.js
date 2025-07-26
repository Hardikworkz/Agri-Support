const axios = require("axios");

const API_KEY = process.env.MANDI_API_KEY;
const RESOURCE_ID = "bd3890fa-8338-4d68-a834-b65acdb2f6a0"; 

const getMandiPrices = async (crop) => {
  const cropFormatted = crop.charAt(0).toUpperCase() + crop.slice(1).toLowerCase();

  const url = `https://api.data.gov.in/resource/${RESOURCE_ID}?api-key=${API_KEY}&format=json`;



  console.log("🔍 Fetching Mandi Data for:", cropFormatted);
  console.log("🌐 API URL:", url);

  try {
    const response = await axios.get(url);
    const records = response.data.records;

    if (!records || records.length === 0) {
      console.warn("⚠️ No records returned for crop:", cropFormatted);
      return [];
    }

    const cleaned = records.slice(0, 5).map((item) => ({
      crop: item.commodity,
      market: item.market,
      state: item.state,
      min_price: parseInt(item.min_price),
      max_price: parseInt(item.max_price),
      modal_price: parseInt(item.modal_price),
      date: item.arrival_date,
    }));

    return cleaned;
  } catch (err) {
    console.error("❌ Error fetching real mandi data:", err.message);
    throw new Error("Could not fetch mandi data.");
  }
};

module.exports = getMandiPrices;
