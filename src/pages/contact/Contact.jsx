import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import ContactHero from "../../components/contact/ContactHero";
import ContactInfoCards from "../../components/contact/ContactInfoCards";
import ContactForm from "../../components/contact/ContactForm";
import ContactSidebar from "../../components/contact/ContactSidebar";

import { useTranslation } from "react-i18next";
import i18n from "i18next";

import "../../components/contact/Contact.css";

function Contact() {

  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  return (
    <>
      <Navbar />

      <ContactHero />
      <ContactInfoCards />

      <section className="contact-form-section">
        <ContactForm />
        <ContactSidebar />
      </section>

      <Footer />
    </>
  );
}

export default Contact;
