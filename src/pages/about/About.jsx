import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import AboutHero from "../../components/about/AboutHero";
import MissionVision from "../../components/about/MissionVision";
import StorySection from "../../components/about/StorySection";
import CoreValues from "../../components/about/CoreValues";
import TeamSection from "../../components/about/TeamSection";

import { useTranslation } from "react-i18next";
import i18n from "i18next";

function About() {

  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };
  
  return (
    <>
      <Navbar />

      <AboutHero />
      <MissionVision />
      <StorySection />
      <CoreValues />
      <TeamSection />

      <Footer />
    </>
  );
}

export default About;
