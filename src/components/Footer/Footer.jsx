import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__section">
        <h2 className="footer__section-title">Shop</h2>
        <p className="footer__description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
          veritatis fugiat molestiae omnis ipsam accusamus at voluptatem.
        </p>
        <div className="footer__socials">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="socials__item"
          >
            <FaFacebookF className="footer__icon" />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="footer__icon" />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="footer__icon" />
          </a>
          <a
            href="https://github.com/maxseveryn"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="socials__item"
          >
            <FaGithub className="footer__icon" />
          </a>
        </div>
      </div>

      <div className="footer__section">
        <h2 className="footer__section-title">Quick Links</h2>
        <div className="footer__links">
          <a className="footer__link" href="/">
            About Us
          </a>
          <a className="footer__link" href="/">
            Blogs
          </a>
          <a className="footer__link" href="/">
            Contact Us
          </a>
        </div>
      </div>

      <div className="footer__section footer__contacts">
        <h2 className="footer__section-title">Contact Info</h2>
        <a
          href="tel:+38095322123"
          aria-label="Call phone number"
          className="footer__contact-item"
        >
          <FaPhone />
          <p className="phone__value">+38095322123</p>
        </a>
        <div className="footer__contact-item">
          <FaEnvelope />
          <a
            href="mailto:severinmaksim055@gmail.com"
            aria-label="Send email"
            className="email__value"
          >
            severinmaksim055@gmail.com
          </a>
        </div>
        <div className="footer__contact-item">
          <FaMapMarkerAlt />
          <a
            href="https://www.google.com/maps/place/Kyiv,+Ukraine"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open location"
            className="location__value"
          >
            Ukraine, Kyiv
          </a>
        </div>
      </div>
    </footer>
  );
}
