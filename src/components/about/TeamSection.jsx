import "./About.css";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function TeamSection() {
  
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };
  
  return (
    <section className="team">
      <h2>Meet the Team</h2>
      <p className="subtitle">
        The passionate individuals behind Annapurna
      </p>

      <div className="team-grid">
        <TeamCard name="Rahul Rathod" role="Project Lead" prn="72244305G" />
        <TeamCard name="Akash Midgule" role="Tech Lead" prn="72244235B" />
        <TeamCard name="Yuvraj Wagh" role="Backend Developer" prn="72244385E" />
        <TeamCard name="Gaurav Deshmukh" role="Frontend Developer" prn="72244093G" />
      </div>

      <div className="guide-card">
        <p>Under the guidance of</p>
        <h3>Prof. Kiran A. Sable</h3>
        <span>Internal Project Guide</span>
      </div>
    </section>
  );
}

function TeamCard({ name, role, prn }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="team-card">
      <div className="avatar">{initials}</div>
      <h4>{name}</h4>
      <span className="role">{role}</span>
      <span className="prn">{prn}</span>
    </div>
  );
}

export default TeamSection;
