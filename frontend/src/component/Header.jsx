import "./Header.css";
import { Link } from 'react-router-dom';

const Header = ({ setIsAuthOpen }) => {
  return (
    <header className="header">
      {/* Logo or Title */}
      <div className="logo">CP Training Camp</div>

      {/* Navigation Links */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/teams">Teams</Link>
      </nav>

      {/* Login/Signup Buttons */}
      <div className="auth-buttons">
        <a href="#" className="login-btn" onClick={(e) => {
          e.preventDefault();
          setIsAuthOpen(true);
        }}>Login</a>
      </div>
    </header>
  );
};

export default Header;
