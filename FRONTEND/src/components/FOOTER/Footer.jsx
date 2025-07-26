import "./Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { GiFarmer } from "react-icons/gi";
export default function Footer() {
  return (
    <footer className="footer">
      
        <div className="footer-upper">
          <div className="logo"><GiFarmer  />  Agri Support</div>
          <div className="main-icons">
          <a href="#">About us</a>
          <a href="#">Services</a>
          <a href="#">Use Cases</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
          </div>
          <div className="social-icons">
             <FaLinkedinIn className="icons"/>
             <FaFacebookF className="icons"/>
             <FaTwitter className="icons"/>
          </div>
        </div>
       
      <div className="footer-middle">
        <div className="contact-box">
            <p className="label">Contact us:</p>
            <p style={{height: "5px"}}
            >Email: info@agrisupport.com</p>
            <p style={{height: "5px"}} 
            >Phone: 987-654-3210</p>
            <p  style={{height: "5px" }}
            >Address: 123 Green Lane FarmerTown, India 400001</p>
          </div>
           <div className="subscribe-box">
            <input type="email" placeholder="Email" />
            <button
            >Subscribe to news</button>
          </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 AgriSupport. All Rights Reserved.</p>
           <a href="#">Privacy Policy</a>
          </div>
       
    </footer>
  );
}
