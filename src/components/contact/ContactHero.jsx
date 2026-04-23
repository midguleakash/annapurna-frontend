import "./Contact.css";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function ContactHero() {
  
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };
  
  return (
    <section className="contact-hero">
      <h1>
        Get in <span>Touch</span>
      </h1>
      <p>
        Have questions? We'd love to hear from you. Send us a message and
        we'll respond as soon as possible.
      </p>
    </section>
  );
}

export default ContactHero;
