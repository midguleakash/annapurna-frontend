import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useTranslation } from "react-i18next";
import i18n from "i18next";

function VolunteerBottomNav() {
  
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };
  
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (

    <>
      <div
        style={{
          height: 70,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          background: "#F2F8F5",
          position: "fixed",
          bottom: 0,
          width: "59%",
          marginLeft: 310,
        }}
      >

        <NavItem
          icon="/icons/home.png"
          label="Home"
          onClick={() => navigate("/volunteer")}
        />

        <NavItem
          icon="/icons/heart.png"
          label="Donate"
          onClick={() => navigate("/donor/donate")}
        />

        <NavItem
          icon="/icons/history.png"
          label="History"
          onClick={() => navigate("/donor/history")}
        />

        <NavItem
          icon="/icons/logout.png"
          label="Logout"
          onClick={logout}
        />



        <NavItem
          icon="/icons/profile.png"
          label="Profile"
          onClick={() => setShowProfile(true)}
        />
      </div>

      {showProfile && (
        <div
          onClick={() => setShowProfile(false)}   // ✅ click outside closes
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000
          }}
        >

          <div
            onClick={(e) => e.stopPropagation()}  // ✅ prevent closing when clicking inside
            style={{
              background: "#fff",
              padding: 20,
              borderRadius: 16,
              width: 300,
              textAlign: "center"
            }}
          >

            <h2>Profile</h2>

            <img
              src="/icons/profile.png"
              alt=""
              style={{ width: 80, marginBottom: 10 }}
            />

            <h3>{localStorage.getItem("NAME")}</h3>

            <p><b>Name:</b> {localStorage.getItem("NAME")}</p>
            <p><b>Email:</b> {localStorage.getItem("EMAIL")}</p>
            <p><b>Mobile:</b> {localStorage.getItem("MOBILE")}</p>
            <p><b>Role:</b> {localStorage.getItem("ROLE")}</p>

            <button style={{marginRight: 10  }}  onClick={logout}>Logout</button>

            <button onClick={() => setShowProfile(false)}>Close</button>

          </div>
        </div>
      )}

    </>
  );
}

function NavItem({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "none",
        border: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        cursor: "pointer",
      }}
    >
      <img src={icon} alt={label} style={{ width: 22, height: 22 }} />
      <span style={{ fontSize: 12 }}>{label}</span>
    </button>
  );
}

export default VolunteerBottomNav;
