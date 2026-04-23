import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} Multi SMS Sender. All rights reserved.{' '}
      <span className="footer-links">
        <Link to="/privacy-policy">Privacy Policy</Link>
        {' | '}
        <Link to="/terms-of-service">Terms of Service</Link>
        {' | '}
        <Link to="/faq">FAQ</Link>
      </span>
    </footer>
  );
};

export default Footer;
