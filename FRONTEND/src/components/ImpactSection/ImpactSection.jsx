import React, { useState } from 'react';
import './ImpactSection.css';
import droneImage from '../../assets/drone.jpg'; 

export default function ModernHero() {
  const [activeTab, setActiveTab] = useState(1);

  const services = [
    {
      title: 'Precision Farming Tools',
      desc: 'Our planet’s population is growing rapidly. Already hungry each night. Our planet’s so is the need for more food.',
    },
    {
      title: 'Smart Irrigation System',
      desc: 'Our planet’s population is growing rapidly. Already hungry each night. Our planet’s so is the need for more food.',
    },
    {
      title: 'AI Crop Analytics',
      desc: 'Our planet’s population is growing rapidly. Already hungry each night. Our planet’s so is the need for more food.',
    },
  ];

  return (
    <section className="modern-hero">
      <div className="hero-top">
        <div className="hero-text">
          <h1>Innovative Solutions for <br />Modern Farming</h1>
          <p>Our planet’s population is growing rapidly and so is the need for more food. Already, 800 million people go to bed.</p>
          <button className="hero-btn">
            More Service <span className="arrow">→</span>
          </button>
        </div>
        <div className="drone-image">
          <img src={droneImage} alt="Smart farming drone" />
        </div>
      </div>
 
      <div className="hero-tabs">
        {services.map((item, index) => (
          <div
            key={index}
            className={`tab-item ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
