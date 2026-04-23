import Navbar from "../../components/navbar/Navbar";
import "./Home.css";
import Features from "../../components/features/Features";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";




function Home() {

  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };


  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-left">
          <h1>
            <span className="green">{t("hero_title_1")}</span><br />
            Feed Those in Need
          </h1>

          <p>
            Annapurna connects food donors with receivers through technology.
            Scan, donate, and track in real-time. Together, we can make a difference.
          </p>

          <div className="hero-buttons">
            <Link to="/signup">
              <button className="primary">Start Donating</button>
            </Link>
            
            <Link to="/login">
              <button className="secondary">Login</button>
            </Link>
            
          </div>
        </div>

        <div className="hero-right">
          <img src="/food_donation.jpg" alt="Food Donation" />
        </div>
      </section>

      <Features />
      <Footer />

    </>
  );
}

export default Home;
