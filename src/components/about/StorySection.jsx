import "./About.css";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function StorySection() {
  
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };
  
  return (
    <section className="story">
      <div className="story-text">
        <h2>The Annapurna Story</h2>

        <p>
          Every day in India, tons of perfectly edible food are discarded while
          countless people struggle with hunger.
        </p>

        <p>
          Named after the Hindu goddess of nourishment, Annapurna began as a
          college project and evolved into a movement to reshape food donation.
        </p>

        <p>
          With QR scanning, real-time tracking, and multi-language support,
          Annapurna connects donors with verified NGOs and receivers.
        </p>
      </div>

      <div className="story-image">
        <img src="/about-illustration.jpg" alt="Community support" />
      </div>
    </section>
  );
}

export default StorySection;
