import './Services.css';
import { FaSeedling, FaChartLine, FaCloudSun, FaUniversity } from 'react-icons/fa';
import stats2 from '../../assets/stats2.jpg';
import stats1 from '../../assets/stats1.jpg';

export default function Services() {
  const stats = [
    {
      icon: <FaSeedling />,
      title: '10+',
      subtitle: 'Years of Agricultural Innovation',
      desc: 'With a decade of experience, we’ve pioneered advancements in precision agriculture, helping farmers increase yields by 20% while reducing water consumption by 25%.',
      image: stats1 ,
    },
    {
      icon: <FaChartLine />,
      title: '85%',
      subtitle: 'Customer Satisfaction Rate',
      desc: 'With an 85% customer satisfaction rate, our users trust us to deliver valuable tools and support that enable them to work smarter and grow better.',
      image: stats2,
    },
  ];

  const services = [
    {
      icon: <FaSeedling />,
      title: 'Crop Suggestions',
      desc: 'AI-powered recommendations for optimal crop selection based on soil and climate data.',
    },
    {
      icon: <FaChartLine />,
      title: 'Market Prices',
      desc: 'Real-time mandi prices and market trends to help you make informed selling decisions.',
    },
    {
      icon: <FaCloudSun />,
      title: 'Weather Updates',
      desc: 'Accurate weather forecasts and alerts to plan your farming activities effectively.',
    },
    {
      icon: <FaUniversity />,
      title: 'Government Schemes',
      desc: 'Access information about subsidies, loans, and government support programs.',
    },
  ];

  return (
    <section className="services-section">
      {/* Stats Section */}
    <div className="stats-container">
  {stats.map((item, index) => (
    <div key={index} className={`stat-card ${index === 1 ? 'highlight' : ''}`}>
      <img src={item.image} alt={item.subtitle} className="stat-image" />
      <div className="stat-text">
        <div className="stat-icon">{item.icon}</div>
        <h3 className="stat-title">{item.title}</h3>
        <p className="stat-subtitle">{item.subtitle}</p>
        <p className="stat-desc">{item.desc}</p>
      </div>
    </div>
  ))}
</div>


      {/* Services Section */}
      <div className="main-feature">
        <div className="lables">
        <p className="">• Main Feature</p></div>
        <div className="features">
        <h2 className="feature-heading">
          Unlock the Future of Farming with Powerful Features Designed for Efficiency, Productivity, and Sustainability
        </h2>
        
        <div className="features-grid">
          {services.map((item, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
