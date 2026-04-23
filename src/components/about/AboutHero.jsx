import "./About.css";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function AboutHero() {

  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  return (
    <section className="about-hero">
      <h1>
        About <span>Annapurna</span>
      </h1>
      <p>
        Bridging the gap between food surplus and food scarcity through
        innovative technology
      </p>
    </section>
  );
}

export default AboutHero;
