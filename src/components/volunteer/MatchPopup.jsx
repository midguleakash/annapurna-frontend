import { useTranslation } from "react-i18next";
import i18n from "i18next";

function MatchPopup({ donation, onClose, onManual, onAI }) {
  
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };
  
  return (
    <div className="overlay">
      <div className="popup">
        <h2>Match Donation</h2>
        <p>How do you want to select receiver?</p>

        <button onClick={onManual}>Manual Selection</button>
        <button onClick={onAI}>Use AI Suggestions</button>
      </div>
    </div>
  );
}