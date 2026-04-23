import { useTranslation } from "react-i18next";
import i18n from "i18next";

function ConfirmPopup({ donation, receiver, onConfirm, onCancel }) {
  
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };
  
  return (
    <div className="overlay">
      <div className="popup">
        <h3>Confirm Match</h3>
        <p>
          Do you want to match this donation with{" "}
          {receiver.receiver?.name}'s request?
        </p>

        <button onClick={onCancel}>NO</button>
        <button onClick={onConfirm}>YES</button>
      </div>
    </div>
  );
}