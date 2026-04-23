import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function HistoryTabs({ setFilter }) {
  
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };
  
  const tabs = ["ALL", "PENDING", "COLLECTED", "DELIVERED"];
  const [active, setActive] = useState("ALL");

  const handleClick = (tab) => {
    setActive(tab);
    setFilter(tab);
  };

  return (
    <div
      style={{
        display: "flex",
        background: "#f4a940",
        borderRadius: 10,
        marginRight: 200,
        marginLeft: 200,
        padding: 8,
        marginBottom: 10,
        justifyContent: "space-between",
      }}
    >
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => handleClick(t)}
          style={{
            background: active === t ? "#fff" : "transparent",
            color: active === t ? "#f4a940" : "#fff",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
            padding: "6px 12px",
            borderRadius: 6,
          }}
        >
          {t}
        </button>
      ))}
    </div>
  );
}

export default HistoryTabs;