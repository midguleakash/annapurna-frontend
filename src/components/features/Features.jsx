import "./Features.css";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const features = [
  {
    icon: "📷",
    title: "Smart QR Scanner",
    desc: "Quickly register donations with QR/Barcode scanning or image recognition technology",
  },
  {
    icon: "📍",
    title: "Real-Time Tracking",
    desc: "Track your donations from pickup to delivery with live map integration",
  },
  {
    icon: "🌐",
    title: "Multi-Language Support",
    desc: "Available in English, Hindi, and Marathi for wider accessibility",
  },
  {
    icon: "⏱️",
    title: "Automated Coordination",
    desc: "Smart algorithms match donors with receivers and coordinate pickups automatically",
  },
  {
    icon: "👥",
    title: "Community Network",
    desc: "Join thousands of donors and NGOs working together to end food waste",
  },
  {
    icon: "✅",
    title: "Verified Recipients",
    desc: "All receivers are verified to ensure your donations reach those truly in need",
  },
];

function Features() {
  
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };
  
  return (
    <section className="features">
      <h2>
        Powerful Features for <span>Maximum Impact</span>
      </h2>
      <p className="subtitle">
        Our platform combines cutting-edge technology with ease of use
      </p>

      <div className="features-grid">
        {features.map((f, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
