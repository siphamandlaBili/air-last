import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <h3>Support</h3>
        <ul>
          <li>Help Center</li>
          <li>Safety information</li>
          <li>Cancellation options</li>
          <li>Our COVID-19 Response</li>
          <li>Supporting people with disabilities</li>
          <li>Report a neighborhood concern</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Community</h3>
        <ul>
          <li>Airbnb.org: disaster relief housing</li>
          <li>Support: Afghan refugees</li>
          <li>Celebrating diversity & belonging</li>
          <li>Combating discrimination</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Hosting</h3>
        <ul>
          <li>Try hosting</li>
          <li>AirCover: protection for Hosts</li>
          <li>Explore hosting resources</li>
          <li>Visit our community forum</li>
          <li>How to host responsibly</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>About</h3>
        <ul>
          <li>Newsroom</li>
          <li>Learn about new features</li>
          <li>Letter from our founders</li>
          <li>Careers</li>
          <li>Investors</li>
          <li>Airbnb Luxe</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <div>&copy; 2022 Airbnb, Inc.</div>
        <div className="footer-links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#sitemap">Sitemap</a>
        </div>
        <div className="footer-social">
          <a href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
          <a href="#instagram">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
