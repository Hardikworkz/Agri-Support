import './HeroSection.css';
import HeroImage from '../../assets/hero.jpg';
import Header from '../HEADER/Header'; 
import { FaArrowRightLong } from "react-icons/fa6";
export default function HeroSection() {
  return (
   
    <section className="hero-section">
      {/* Background Image */}
      <div className="hero-background">
        <img src={HeroImage} alt="Farming Background" className="background-img" />
        <div className="overlay"></div>
      </div>

      {/* Header inside hero */}
      <Header />

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-text-block">
          
          <h1 className="hero-heading">Empowering Farmers<br/>
         with Smart Agricultural Insights</h1>
          <p className="hero-subtext">
            Our platform empowers farmers with digital tools and real-time data for smarter farming decisions.
          We provide services like crop suggestions, mandi prices, government schemes, and weather updates.
          </p>
          <button className="hero-button">Get Started <span className="arrow"> <FaArrowRightLong /> </span></button>
        </div>

        <div className="hero-mission-box">
          <h3>● Our Mission</h3>
          <p>
            To empower farmers with innovative tools and technology that enhance productivity,
            sustainability, and efficiency—shaping the future of farming.
          </p>
          <a href="#learn-more" className="mission-link">Learn More →</a>
        </div>
      </div>
    </section>
    
  
  );
}
