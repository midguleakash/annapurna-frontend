import { useEffect, useState } from "react";
import API from "../../services/api";
import DonationCard from "../../components/donor/DonationCard";
import HistoryTabs from "../../components/donor/HistoryTabs";
import VolunteerBottomNav from "../../components/volunteer/VolunteerBottomNav";

import { useTranslation } from "react-i18next";
import i18n from "i18next";

function DonationHistory() {
  
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };
  
  const [donations, setDonations] = useState([]);
  const [filter, setFilter] = useState("ALL");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      setLoading(true);

      const res = await API.get(
        "/volunteer/matches/my",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      setDonations(res.data);
    } catch (err) {
      alert("Failed to load history");
    } finally {
      setLoading(false);
    }
  };

  const filtered = donations.filter(d =>
    filter === "ALL"
      ? true
      : d.status.toLowerCase() === filter.toLowerCase()
  );

  return (
    <>
      <div style={{ padding: 16 }}>
        <h2 className="mb-3" style={{
          marginRight: 200,
          marginLeft: 200,
        }}>Donation History</h2>

        <HistoryTabs setFilter={setFilter} />

        {loading ? (
          <p style={{
            marginRight: 200,
            marginLeft: 200,
          }}>Loading...</p>
        ) : filtered.length === 0 ? (
          <p style={{
            marginRight: 200,
            marginLeft: 200,
          }}>No donations found</p>
        ) : (
          filtered.map((d) => (
            <DonationCard key={d._id} donation={d} />
          ))
        )}
      </div>

      <VolunteerBottomNav />
    </>
  );
}

export default DonationHistory;
