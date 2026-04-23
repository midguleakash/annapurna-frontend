import "./Navbar.css";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function Navbar() {
  
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };
  
  const navigate = useNavigate();

  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  return (
    <nav className="navbar">
      {/* Left */}
      <div className="nav-left">
        <img src="/annapurna_logo.jpg" alt="Annapurna" />
        <div>
          <h2>Annapurna</h2>
          <span>{t("tagline")}</span>
        </div>
      </div>

      {/* Center */}
      <ul className="nav-center">
        <li><Link to="/">{t("home")}</Link></li>
        <li><Link to="/about">{t("about")}</Link></li>
        <li><Link to="/contact">{t("contact")}</Link></li>
      </ul>

      {/* Right */}
      <div className="nav-right">
        {/* Language Switch */}
        <select
          className="lang"
          onChange={(e) => changeLanguage(e.target.value)}
          defaultValue={localStorage.getItem("lang") || "en"}
        >
          <option value="en">EN</option>
          <option value="hi">HI</option>
          <option value="mr">MR</option>
        </select>
        <button className="login-btn"
          onClick={() => navigate("/login")}>
          {t("login")}
        </button>

        <button className="start-btn"
          onClick={() => navigate("/signup")}>
          {t("get_started")}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
