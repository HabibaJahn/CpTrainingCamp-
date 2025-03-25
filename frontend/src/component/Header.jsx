import "./Header.css";

const Header = ({ setIsAuthOpen }) => {
  return (
    <header className="header">
      {/* Logo or Title */}
      <div className="logo">CP Training Camp</div>

      {/* Navigation Links */}
      <nav>
        <a href="#home">Home</a>
        <a href="#about">Schedule</a>
        <a href="#schedule">Leaderboard</a>
        <a href="#teams">Teams</a>
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
