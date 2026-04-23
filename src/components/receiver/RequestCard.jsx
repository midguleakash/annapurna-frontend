import { useTranslation } from "react-i18next";
import i18n from "i18next";

function RequestCard({ request }) {
  
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };
  

  console.log(request);

  const getStatusColor = (status) => {
    if (status === "Received") return "green";
    if (status === "Collected") return "orange";
    if (status === "Waiting") return "red";
    return "black";
  };

  return (
    <div
      style={{
        marginTop: 16,
        marginRight:200,
        marginLeft:200,
        padding: 16,
        paddingLeft:16,
        borderRadius: 16,
        background: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >

      <h3>
        Receiver: {request.receiver?.name || request.receiverName}
      </h3>

      <p>
        Receiver Address: {request.receiver?.address || request.deliveryAddress}
      </p>

      <p>
        Receiver Mobile: {request.receiver?.mobile || request.receiverPhone}
      </p>

      <p><b>Food Type:</b> {request.foodType}</p>
      <p><b>Food Quantity:</b> {request.quantity}</p>

      <p style={{ color: getStatusColor(request.status), fontWeight: "bold" }}>
        Status: {request.status}
      </p>

      <p>
        <b>Volunteer:</b>{" "}
        {request.volunteer?.name || "Not Assigned"}
      </p>

      <p style={{ color: "green", fontWeight: "bold" }}>
        Donor: {request.donor?.name || "Not Assigned"}
      </p>

      <p>
        Donor Address: {request.donor?.address || "-"}
      </p>

      <p>
        Donor Mobile: {request.donor?.mobile || "-"}
      </p>

    </div>
  );
}

export default RequestCard;

