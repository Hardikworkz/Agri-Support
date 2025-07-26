import { useState } from "react";
import "./AboutUs.css";

const tabs = [
  {
    label: "About Us",
    title: "Who We Are at Agri",
    content: (
      <>
        <h2>
          With years of expertise in both farming and tech, we’re committed to
          helping farmers grow smarter and achieve better yields. Together,
          we’re shaping the future of farming for a more sustainable world.
        </h2>
        <p>
          By combining innovation with sustainability, we empower farmers to
          increase productivity, reduce waste, and contribute to a healthier
          planet. Together, we are shaping the future of farming, ensuring it
          thrives for generations to come.
        </p>
      </>
    ),
  },
  {
    label: "Journey",
    title: "Our Growth Journey",
    content: (
      <>
        <h2>
          From humble beginnings to digital excellence, our journey is rooted in
          the soil of innovation and growth.
        </h2>
        <p>
          We've evolved from a local farming initiative into a global agri-tech
          platform. Along the way, we've stayed true to one goal — to serve and
          uplift the agricultural community with purpose and progress.
        </p>
      </>
    ),
  },
  {
    label: "Vision",
    title: "Our Vision for the Future",
    content: (
      <>
        <h2>
          To lead the transition to intelligent and sustainable farming
          practices across the world.
        </h2>
        <p>
          Our vision is rooted in enabling farmers with data-driven tools,
          education, and networks that lead to improved livelihoods and a
          healthier planet.
        </p>
      </>
    ),
  },
  {
    label: "Mission",
    title: "Driving Purpose Through Innovation",
    content: (
      <>
        <h2>
          To empower farmers with tools, knowledge, and platforms that create
          tangible change in agricultural productivity and environmental
          impact.
        </h2>
        <p>
          Every product we build and every decision we make is guided by our
          mission to transform agriculture sustainably, one field at a time.
        </p>
      </>
    ),
  },
];

export default function AboutUsTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
    <div className="divider"></div>
    <section className="about-tabs-container">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${
              activeTab === index ? "active" : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="tab-content">
        <ul>
          <li>{tabs[activeTab].title}</li>
        </ul>
        <div className="tab-text">{tabs[activeTab].content}
        <button className="learn-more-btn">Learn More</button>
      </div>
      </div>
     
    </section>
    </div>
  );
}
