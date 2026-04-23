import "./About.css";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function CoreValues() {

  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };
  
  return (
    <section className="values">
      <h2>Our Core Values</h2>
      <p className="subtitle">
        The principles that guide everything we do
      </p>

      <div className="values-grid">
        <ValueCard
          title="Transparency"
          desc="Every donation is tracked and verified for complete trust."
          icon="🔍"
        />
        <ValueCard
          title="Community First"
          desc="We believe in collective action and strong local networks."
          icon="🤝"
        />
        <ValueCard
          title="Impact Driven"
          desc="We measure success by meals delivered and waste prevented."
          icon="🎯"
        />
      </div>
    </section>
  );
}

function ValueCard({ title, desc, icon }) {
  return (
    <div className="value-card">
      <div className="icon-green">{icon}</div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

export default CoreValues;
