import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
        <img className="navbar-logo-icon" src="/images/logo.svg" alt="MSS Logo" />
        <span className="navbar-logo-text">
          <span className="blue">MULTI </span>
          <span className="blue">SMS SENDER</span>
        </span>
      </Link>

      <button
        className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
        {!isHome && (
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        )}
        {isHome && (
          <>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
            <a href="#connect" onClick={() => setMenuOpen(false)}>Contact Us</a>
          </>
        )}
        <a
          href="#getapp"
          className="navbar-cta"
          onClick={() => setMenuOpen(false)}
        >
          GET APP
        </a>
        <div className="navbar-legal">
          <Link to="/privacy-policy" onClick={() => setMenuOpen(false)}>Privacy Policy</Link>
          <span className="navbar-legal-divider">|</span>
          <Link to="/terms-of-service" onClick={() => setMenuOpen(false)}>Terms of Service</Link>
          <span className="navbar-legal-divider">|</span>
          <Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
        </div>
      </div>

      {menuOpen && <div className="navbar-overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
};

export default Navbar;
