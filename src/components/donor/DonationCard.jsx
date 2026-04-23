import { useTranslation } from "react-i18next";
import i18n from "i18next";

function DonationCard({ donation }) {
  
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
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
      <h3>Donor: {donation.donor?.name || donation.donorName}</h3>

      <p>Donor Address: {donation.donor?.address || donation.pickupAddress}</p>
      <p>Donor Mobile: {donation.donor?.mobile || donation.donorPhone}</p>

      <p><b>Food Type:</b> {donation.foodType}</p>
      <p><b>Food Quantity:</b> {donation.quantity}</p>

      <p style={{ color: "orange", fontWeight: "bold" }}>
        Status: {donation.status}
      </p>

      <p>
        <b>Volunteer:</b>{" "}
        {donation.volunteer?.name || "Not Assigned"}
      </p>

      <p style={{ color: "green", fontWeight: "bold" }}>
        Receiver: {donation.receiver?.name || "Not Assigned"}
      </p>

      <p>
        Receiver Address: {donation.receiver?.address || "Not Assigned"}
      </p>

      <p>
        Receiver Mobile: {donation.receiver?.mobile || "Not Assigned"}
      </p>
    </div>
  );
}

export default DonationCard;
