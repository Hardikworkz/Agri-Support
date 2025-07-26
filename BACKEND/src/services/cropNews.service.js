// services/marketNews.service.js
const axios = require("axios");

const API_KEY = process.env.NEWS_API_KEY; 
const BASE_URL = "https://newsapi.org/v2/everything";

const getMarketNews = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: "agriculture OR crop OR mandi OR farming OR agri market",
        sortBy: "publishedAt",
        pageSize: 10,
        language: "en",
        apiKey: API_KEY,
      },
    });

    const news = response.data.articles.map((article) => ({
      title: article.title,
      description: article.description,
      url: article.url,
      image: article.urlToImage,
      publishedAt: article.publishedAt,
      source: article.source.name,
    }));

    return news;
  } catch (error) {
    console.error("❌ Error fetching news:", error.message);
    throw new Error("Failed to fetch market news");
  }
};

module.exports = getMarketNews;
