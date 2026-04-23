import { useTranslation } from "react-i18next";
import i18n from "i18next";

function ReceiverList({ receivers, onSelect }) {
  
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };
  
  return (
    <div>
      {receivers.map((r) => (
        <div key={r._id} className="card">
          <h3>{r.receiver?.name}</h3>
          <p>Food: {r.foodType}</p>
          <p>Status: {r.status}</p>

          <button onClick={() => onSelect(r)}>
            Select
          </button>
        </div>
      ))}
    </div>
  );
}