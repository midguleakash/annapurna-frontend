import RequestForm from "../../components/receiver/RequestForm";
import ReceiverBottomNav from "../../components/receiver/ReceiverBottomNav";

import { useTranslation } from "react-i18next";
import i18n from "i18next";

function Donate() {
  
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };
  
  return (
    <>

      <div style={{
          padding: 16, marginTop: 0,
          marginRight: 300,
          marginBottom: 0,
          marginLeft: 300,
          paddingBottom: 100,
          
        }}>
        <RequestForm />
        

      </div>

      <ReceiverBottomNav />
    </>
  );
}

export default Donate;
