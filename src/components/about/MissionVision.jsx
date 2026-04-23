import "./About.css";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function MissionVision() {

  
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };
  
  return (
    <section className="about-cards">
      <div className="info-card">
        <div className="icon green">🎯</div>
        <h3>Our Mission</h3>
        <p>
          To eliminate food waste while addressing hunger by creating a seamless
          platform that connects food donors with those in need.
        </p>
      </div>

      <div className="info-card">
        <div className="icon blue">👁️</div>
        <h3>Our Vision</h3>
        <p>
          A world where no edible food goes to waste and no person goes to bed
          hungry, powered by technology and compassion.
        </p>
      </div>
    </section>
  );
}

export default MissionVision;
