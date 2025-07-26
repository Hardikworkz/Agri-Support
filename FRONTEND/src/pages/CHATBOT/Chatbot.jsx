import './Chatbot.css';
import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";
import Editor from 'react-simple-code-editor';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Markdown from 'react-markdown';
import LoadingScreen from './LoadingScreen/LoadingScreen';
import "prismjs/components/prism-javascript";
import { HiMiniBanknotes } from "react-icons/hi2";
import { TbMoneybag } from "react-icons/tb";
import { GiPlantSeed } from "react-icons/gi";
import { FaShop } from "react-icons/fa6";
import { FaMicrophone, FaMapMarkerAlt, FaSync, FaMobileAlt } from 'react-icons/fa';

function App() {
  const [language] = useState('javascript');
  const [fontSize]= useState(12);
  const [code, setCode] = useState(`Suggest me some crops to grow in the month of January`);
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  async function reviewCode() {
    setReview('');
    setLoading(true);

    const codeEditorElement = document.querySelector('.code-editor');
    if (codeEditorElement) codeEditorElement.classList.add('fade-out');

    const currentCode = code;

    try {
      const response = await axios.get('http://localhost:3000/ai/get-review', {
        params: { code: currentCode }
      });
      console.log(response.data);
      setReview(response.data.review || response.data);
    } catch (error) {
      console.error('Error fetching review:', error);
      setReview(`Error: ${error.response?.data?.error || error.message}`);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setCode(currentCode);
        if (codeEditorElement) codeEditorElement.classList.remove('fade-out');
      }, 300);
    }
  }

  return (
    <main className="chatbot-main">
      <section className="chathero">
        <div className="chathero-left">
          <h1>AgriBot – Your Farming Assistant</h1>
          <p className="subtext">Government Support, Agriculture Techniques, and More</p>
        </div>
      </section>

      <section className="chat-section">
        <div className="chat-box">
          <div className="chat-header">
            <div className="chat-avatar">🤖</div>
            <div className="chat-title">
              <h2>Ask Anything Related to Farming</h2>
              <p>Government support, agriculture techniques, and more…</p>
            </div>
          </div>

          <div className="chat-input-section">
            <Editor
              value={code}
              onValueChange={setCode}
              highlight={inputCode =>
                Prism.languages[language]
                  ? Prism.highlight(inputCode, Prism.languages[language], language)
                  : inputCode
              }
              padding={10}
              className="code-editor"
              style={{
                fontFamily: '"Space Grotesk", "sans-serif"',
                fontSize,
                border: "1px solid #ccc",
                borderRadius: "8px",
                background: "#f9f9f9",
                color: "#333",
                minHeight: "100px",
              }}
            />

            <button className="review-button" onClick={reviewCode}>Ask</button>
          </div>

          {loading ? (
            <LoadingScreen />
          ) : review && (
            <div className="review-output">
              <Markdown>{review}</Markdown>
              <button
                className={`copy-button${copied ? ' copied' : ''}`}
                onClick={() => {
                  navigator.clipboard.writeText(review);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1000);
                }}
              >
                {copied ? "Copied!" : "Copy to Clipboard"}
              </button>
            </div>
          )}
        </div>
      </section>

     <section className="Chatfeatures-section">
        <h3>What AgriBot Can Help You With</h3>
        <p className="section-subtext" >Comprehensive farming assistance at your fingertips</p>
        <div className="Chatfeatures-grid">
          <div className="Chatfeature-card">
            <icon><TbMoneybag /></icon>
            <h4>Government Schemes</h4>
            <p>Get details on PM-KISAN, soil health card, crop insurance, and more.</p>
          </div>
          <div className="Chatfeature-card">
            <icon><HiMiniBanknotes /></icon>
            <h4>Loans & Financial Aid</h4>
            <p>Find out how to apply for KCC, NABARD loans, etc.</p>
          </div>
          <div className="Chatfeature-card">
            <icon><GiPlantSeed /></icon>
            <h4>Best Farming Practices</h4>
            <p>Get seasonal tips, fertilizer info, and crop cycle guides.</p>
          </div>
          <div className="Chatfeature-card" >
            <icon><FaShop /></icon>
            <h4>Market & Selling Guidance</h4>
            <p>Understand mandi registration, direct selling, and pricing.</p>
          </div>
        </div>
      </section>

      {/* <section className="benefits-section">
        <h3>Key Benefits</h3>
        <ul>
          <li>✅ 24x7 Availability</li>
          <li>✅ Regional Language Support</li>
          <li>✅ Saves Time</li>
          <li>✅ Trustworthy Info</li>
        </ul>
      </section> */}

       <section className="future-section">
        <h3>Future Enhancements</h3>
        <p className="section-subtext">Coming soon to make farming even easier</p>
        <div className="future-grid">
          <div className="future-box">
            <FaMicrophone className="future-icon" />
            <h4>Voice Interaction</h4>
            <p>Ask questions using your voice</p>
          </div>
          <div className="future-box">
            <FaMapMarkerAlt className="future-icon" />
            <h4>Location-Aware</h4>
            <p>Schemes filtered by your area</p>
          </div>
          <div className="future-box">
            <FaSync className="future-icon" />
            <h4>Real-time Data</h4>
            <p>Live government database integration</p>
          </div>
          <div className="future-box">
            <FaMobileAlt className="future-icon" />
            <h4>Mobile-First</h4>
            <p>Optimized mobile experience</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
