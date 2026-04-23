import "./Login.css";
import { useState } from "react";
import axios from "axios";
import API from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import { useTranslation } from "react-i18next";
import i18n from "i18next";


function Login() {

  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);


    try {
      const res = await API.post("/user/login", {
        email,
        password,
      });

      console.log(res.data);

      // Optional: store token
      localStorage.setItem("token", res.data.token);

      localStorage.setItem("NAME", res.data.name);
      localStorage.setItem("EMAIL", res.data.email);
      localStorage.setItem("MOBILE", res.data.mobile);
      localStorage.setItem("ROLE", res.data.role);
      // Redirect after login
      const role = res.data.role;

      if (role === "donor") {
        navigate("/donor");
      } else if (role === "receiver") {
        navigate("/receiver");
      } else if (role === "volunteer") {
        navigate("/volunteer");
      } else {
        navigate("/");
      }

    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Login failed");
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="login-container">
        <div className="login-card">
          <h2>Welcome Back</h2>
          <p>Please login to your account</p>

          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? (
                <span className="loader"></span>
              ) : (
                "Login"
              )}
            </button>
          </form>

          <div className="login-footer">
            <span>Don’t have an account?</span>
            <a href="/signup">Sign Up</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Login;
