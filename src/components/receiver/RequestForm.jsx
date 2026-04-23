import { useState, useEffect } from "react";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
import i18n from "i18next";

function RequestForm() {
  
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };
  
  const [foodType, setFoodType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const navigate = useNavigate();


  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);

        setLocation({ latitude, longitude });
      },
      (error) => {
        console.error(error);

        if (error.code === 1) {
          alert("Permission denied. Please allow location access.");
        } else if (error.code === 2) {
          alert("Position unavailable");
        } else {
          alert("Something went wrong");
        }
      },
      {
        enableHighAccuracy: true,  // IMPORTANT → better accuracy
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);


  const submitDonation = async () => {
    if (!foodType || !quantity) return alert("All fields required");
    if (!location) return alert("Location not available");

    setLoading(true);

    try {
      await API.post(
        "/donation/create",
        {
          foodType,
          quantity,
          location,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      alert("Donation created");

      setFoodType("");
      setQuantity("");

      navigate("/donor");

    } catch {
      alert("Failed to create donation");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 16 }}>
      <h2 className="text-center pt-3 pb-3">Request Food</h2>

      <form onSubmit={(e) => {
        e.preventDefault();
        submitDonation();
      }}>
        <div className="mb-3 pe-5">
          <label htmlFor="exampleInputEmail1" className="form-label">Required Food</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Required Food" value={foodType}
            onChange={(e) => setFoodType(e.target.value)} />

        </div>
        <div className="mb-3 pe-5">
          <label htmlFor="exampleInputPassword1" className="form-label">Required Food Quantity</label>
          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter quantity" value={quantity}
            onChange={(e) => setQuantity(e.target.value)} />
        </div>

        {location && (
          <div classNameName="mb-4">
            <iframe
              key={`${location.latitude}-${location.longitude}`}
              title="map"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: 8 }}
              loading="lazy"
              allowFullScreen
              src={`https://maps.google.com/maps?q=${location.latitude},${location.longitude}&z=18&output=embed`}
            />
          </div>
        )}


        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>

      </form>
    </div>
  );
}

export default RequestForm;
