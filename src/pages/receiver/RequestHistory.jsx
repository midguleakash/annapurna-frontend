import { useEffect, useState } from "react";
import API from "../../services/api";
import RequestCard from "../../components/receiver/RequestCard";
import HistoryTabs from "../../components/receiver/HistoryTabs";
import ReceiverBottomNav from "../../components/receiver/ReceiverBottomNav";

import { useTranslation } from "react-i18next";
import i18n from "i18next";

function RequestHistory() {
  
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };
  
    const [requests, setRequests] = useState([]);
    const [filter, setFilter] = useState("ALL");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchHistory();
    }, []);

    const fetchHistory = async () => {
        try {
            setLoading(true);

            const res = await API.get(
                "/recevieRequests/my",
                {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                }
            );

            setRequests(res.data);
        } catch (err) {
            alert("Failed to load history");
        } finally {
            setLoading(false);
        }
    };

    const filtered = requests.filter(d =>
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
                }}>Requests History</h2>

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
                    }}>No Recive Request found</p>
                ) : (
                    filtered.map((d) => (
                        <RequestCard key={d._id} request={d} />
                    ))
                )}
            </div>

            <ReceiverBottomNav />
        </>
    );
}

export default RequestHistory;
