import { NavLink, Link } from 'react-router-dom';
import './Header.css'; // Make sure this path is correct

export default function Header() {
  return (
    <header className="header">
      {/* Logo on the left */}
      <div className="logo">
        <Link to="/">Agri Support</Link>
      </div>

      {/* Center navigation links */}
      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
        <NavLink to="/weather" className={({ isActive }) => isActive ? "active-link" : ""}>Weather</NavLink>
        <NavLink to="/crop-suggestions" className={({ isActive }) => isActive ? "active-link" : ""}>Crop Suggestions</NavLink>
        <NavLink to="/CropTrends" className={({ isActive }) => isActive ? "active-link" : ""}>Crop Trends</NavLink>
        <NavLink to="/chatbot" className={({ isActive }) => isActive ? "active-link" : ""}>Chatbot</NavLink>
        
      </nav>

      {/* Right side login/signup */}
      <div className="auth-links">
        <NavLink to="/login" className={ ({ isActive }) => isActive ? "active-link" : ""}>Login</NavLink>
        <NavLink to="/register" className={({ isActive }) => isActive ? "active-link" : ""}>Register</NavLink>
      </div>
    </header>
  );
}
