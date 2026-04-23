import "./Signup.css";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import { useTranslation } from "react-i18next";
import i18n from "i18next";

function Signup() {
  
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    password: "",
    role: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (form.mobile.length !== 10) {
        setLoading(false);
        return alert("Enter valid mobile number");
      }

      if (!form.role) {
        setLoading(false);
        return alert("Please select a role");
      }

      if (!form.role) {
        setLoading(false);
        return alert("Please select a role");
      }

      const res = await API.post(
        "/user/register",
        form
      );

      alert(res.data.message);

      navigate("/login");

    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="signup-container">
        <div className="signup-card">
          <h2>Create Account</h2>
          <p>Join Annapurna and start making an impact</p>

          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label>Mobile Number</label>
            <input
              name="mobile"
              placeholder="10-digit mobile number"
              value={form.mobile}
              onChange={handleChange}
              required
            />

            <label>Address</label>
            <textarea
              name="address"
              placeholder="Enter your address"
              value={form.address}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a strong password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <label>Register As</label>
            <div className="role-group">
              <label>
                <input
                  type="radio"
                  name="role"
                  value="donor"
                  checked={form.role === "donor"}
                  onChange={handleChange}
                />
                Donor
              </label>

              <label>
                <input
                  type="radio"
                  name="role"
                  value="volunteer"
                  checked={form.role === "volunteer"}
                  onChange={handleChange}
                />
                Volunteer
              </label>

              <label>
                <input
                  type="radio"
                  name="role"
                  value="receiver"
                  checked={form.role === "receiver"}
                  onChange={handleChange}
                />
                Receiver (NGO)
              </label>
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create Account"}
            </button>
          </form>

          <div className="signup-footer">
            <span>Already have an account?</span>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Signup;
