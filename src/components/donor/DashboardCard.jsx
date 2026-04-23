import { useTranslation } from "react-i18next";
import i18n from "i18next";

function DashboardCard({ title, onClick }) {
  
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };
  
  return (
    <div
      onClick={onClick}
      style={{
        marginTop: 20,
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        cursor: "pointer",
      }}
    >
      <img
        src="/food_donation.jpg"
        alt=""
        style={{ width: "100%", height: 240, objectFit: "cover" }}
      />
      <div style={{ padding: 16, textAlign: "center" , backgroundColor:"#F3D8AE" }}>
        <strong>{title}</strong>
      </div>
    </div>
  );
}

export default DashboardCard;
