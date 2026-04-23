import "./Contact.css";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function ContactInfoCards() {
  
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };
  
  return (
    <section className="contact-cards">
      <InfoCard title="Email Us" value="info@annapurna.org" icon="✉️" />
      <InfoCard title="Call Us" value="+91 98765 43210" icon="📞" />
      <InfoCard
        title="Visit Us"
        value="PGMCOE, Wagholi, Pune - 412207"
        icon="📍"
      />
    </section>
  );
}

function InfoCard({ title, value, icon }) {
  return (
    <div className="contact-card">
      <div className="icon-green ">{icon}</div>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

export default ContactInfoCards;
