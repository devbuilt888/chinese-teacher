import React from "react";
import jblogImg from '../images/jblog-clear.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-item">
          <img
            className="footer-logo"
            src={jblogImg}
          />            <p>This is the text under the logo as a paragraph.</p>
        </div>
        <div className="footer-item">
          <ul className="footer-link-list">
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ul>
        </div>
        <div className="footer-item">
          <h2 className="footer-subscribe-title">Subscribe</h2>
          <p className="footer-subscribe-content">Subscribe here</p>
          <input className="enter-email" placeholder="Enter email"></input>
          <button className="subscribe-button">Send</button>
        </div>
      </div>
      <div className="footer-copyright"><p className="copyright-paragraph">2020 copyright J-Blog.live</p></div>
    </div>
  );
};

export default Footer;
