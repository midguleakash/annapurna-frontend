import "./Contact.css";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function ContactSidebar() {
  
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };
  
  return (
    <div className="side-cards">
      {/* Quick Links */}
      <div className="side-card">
        <h3>Quick Links</h3>
        <ul>
          <li>Frequently Asked Questions</li>
          <li>Donation Guidelines</li>
          <li>Partner with Us</li>
          <li>Volunteer Opportunities</li>
        </ul>
      </div>

      {/* Office Hours */}
      <div className="side-card">
        <h3>Office Hours</h3>
        <p>Monday - Friday <span>9:00 AM - 6:00 PM</span></p>
        <p>Saturday <span>10:00 AM - 4:00 PM</span></p>
        <p>Sunday <span>Closed</span></p>
      </div>

      {/* Emergency */}
      <div className="side-card emergency">
        <h3>For Emergencies</h3>
        <p>
          If you have urgent food to donate or need immediate assistance,
          please call our 24/7 helpline:
        </p>
        <button>📞 1800-123-456</button>
      </div>
    </div>
  );
}

export default ContactSidebar;
