import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardCard from "../../components/receiver/DashboardCard";
import ReceiverBottomNav from "../../components/receiver/ReceiverBottomNav";
import "../../components/receiver/Receiver.css";

import { useTranslation } from "react-i18next";
import i18n from "i18next";


function ReceiverDashboard() {
  
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };
  
  const navigate = useNavigate();
  const name = localStorage.getItem("NAME") || "Donor";

  //   useEffect(() => {
  //     if (!localStorage.getItem("TOKEN")) {
  //       navigate("/login");
  //     }
  //   }, []);

  return (
    <>

      <div style={{backgroundColor:"#F3FDF6"}}>

        <div className="donor-header">
          <h2>Hello, {name}</h2>
        </div>

        <div style={{
          padding: 16, marginTop: 0,
          marginRight: 300,
          marginBottom: 0,
          marginLeft: 300,
          paddingBottom: 100,
          paddingTop: 60
        }}>



          <DashboardCard
            title="Request Food"
            onClick={() => navigate("/receiver/request-food")}
          />

          <DashboardCard
            title="My Request History"
            onClick={() => navigate("/receiver/history")}
          />



        </div>

        <ReceiverBottomNav />
      </div>

    </>
  );
}

export default ReceiverDashboard;
