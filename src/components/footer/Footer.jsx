import "./Footer.css";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function Footer() {
  
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };
  
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <div className="brand-logo">A</div>
          <h3>Annapurna</h3>
          <p>
            Connecting donors with those in need. Together,
            we can end food waste and hunger.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Support */}
        <div className="footer-column">
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4>Contact</h4>
          <p>Wagholi, Pune - 412207</p>
          <p>Maharashtra, India</p>
          <p className="email">info@annapurna.org</p>
        </div>
      </div>

      <div className="footer-bottom">
        Made with <span className="heart">❤</span> by Team Annapurna © 2025
      </div>
    </footer>
  );
}

export default Footer;
