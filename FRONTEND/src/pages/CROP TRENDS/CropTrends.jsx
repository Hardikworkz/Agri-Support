import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CropTrends.css";
import { FaBullhorn, FaCloudSun, FaRupeeSign, FaFlask, FaLanguage, FaSms,  FaClock, FaLeaf, FaChartLine ,FaMapMarkerAlt,FaMicrophoneAlt } from "react-icons/fa";

function CropMarketTrends() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory] = useState("All");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/market-news");
        setNews(res.data.news);
      } catch (err) {
        console.error("❌ Error fetching crop market news:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);


  

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Government Policies":
        return <FaBullhorn className="category-icon gov" />;
      case "Weather Alert":
        return <FaCloudSun className="category-icon gov" />;
      case "Market Prices":
        return <FaRupeeSign className="category-icon market" />;
      case "Crop Research & Innovations":
        return <FaFlask className="category-icon research" />;
      default:
        return <FaBullhorn className="category-icon" />;
    }
  };

  const filteredNews = activeCategory === "All"
    ? news
    : news.filter(item => item.category === activeCategory);

  return (
    <div className="crop-market-trends">
      <header className="news-header">
        <h1>"Informed farmers make better decisions."</h1>
        <p>
          CropTrends keeps you updated with the latest news from the world of agriculture —
          including market movements, government announcements, weather alerts, and farming innovations.
        </p>
        <div className="category-tags">
          <span>📈 Market Updates</span>
          <span>🌦️ Weather Alerts</span>
          <span>🧪 Innovations</span>
        </div>
      </header>


       <section className="news-feed">
        <h2>Daily News Feed</h2>
        <p className="feed-subtitle">Stay updated with the latest agricultural developments</p>

        {loading ? (
          <p className="loading">Loading news...</p>
        ) : (
          <div className="news-list-new">
            {filteredNews.map((item, index) => (
              <div className="news-card-new" key={index}>
                <div className="news-header-row">
                  {getCategoryIcon(item.category)}
                  <div className="news-headline-block">
                    <h3 className="news-title">{item.title}</h3>
                    <p className="news-date">Published: {new Date(item.publishedAt).toLocaleDateString()}</p>
                  </div>
                </div>
                <p className="news-description">{item.description}</p>
                <div className="news-footer-row">
                  <span
                    className="news-category-badge"
                   
                  >
                    {item.category || "General"}
                  </span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <section className="why-news-matters">
  <h2>Why Crop News Matters</h2>
  <p>
    Real-time information helps farmers adapt to changes quickly — whether it’s shifting
    prices, climate warnings, or new policy announcements. With CropTrends, they don’t
    miss a beat and can take action on time.
  </p>

  <div className="benefits-section">
    <div className="benefit-item">
      <div className="benefit-icon green"><FaClock /></div>
      <h4>Real-Time Updates</h4>
      <p>
        Get instant notifications about market changes, weather alerts, and policy updates
        that affect your crops.
      </p>
    </div>
    <div className="benefit-item">
      <div className="benefit-icon green"><FaLeaf /></div>
      <h4>Informed Decisions</h4>
      <p>
        Make data-driven choices about planting, harvesting, and selling based on latest
        market intelligence.
      </p>
    </div>
    <div className="benefit-item">
      <div className="benefit-icon green"><FaChartLine /></div>
      <h4>Better Profits</h4>
      <p>
        Optimize your farming operations and maximize returns with timely market and weather insights.
      </p>
    </div>
  </div>
</section>

<section className="coming-soon">
  <h2>Coming Soon</h2>
  <p>Enhanced features to make agricultural news even more accessible</p>
  <div className="coming-features">
    <div className="comingSoon-box">
      <div className="comingSoon-icon"><FaLanguage /></div>
      <h5>Local Language</h5>
      <p>News in your preferred regional language</p>
    </div>
    <div className="comingSoon-box">
      <div className="comingSoon-icon"><FaMapMarkerAlt /></div>
      <h5>Personalized News</h5>
      <p>Content based on your region and crops</p>
    </div>
    <div className="comingSoon-box">
      <div className="comingSoon-icon"><FaSms /></div>
      <h5>SMS Alerts</h5>
      <p>Daily notifications on your mobile</p>
    </div>
    <div className="comingSoon-box">
      <div className="comingSoon-icon"><FaMicrophoneAlt /></div>
      <h5>Audio News</h5>
      <p>Listen to news for easy accessibility</p>
    </div>
  </div>
</section>


    </div>
  );
}

export default CropMarketTrends;
