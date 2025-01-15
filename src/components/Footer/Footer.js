import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <a href="https://vk.com" className="social-link"><i className="fab fa-vk"></i></a>
      <a href="https://instagram.com" className="social-link"><i className="fab fa-instagram"></i></a>
      <a href="https://twitter.com" className="social-link"><i className="fab fa-twitter"></i></a>
      <a href="https://github.com" className="social-link"><i className="fab fa-github"></i></a>
      <a href="https://linkedin.com" className="social-link"><i className="fab fa-linkedin"></i></a>
      <div className="copyright">
        <p> Copyright ©  {new Date().getFullYear()} frontend-dev.com</p>
      </div>
    </footer>
  );
}

export default Footer;



