
import React from "react";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import QueriesSection from './components/QueriesSection'
import AboutSection from "./components/About";
import MissionSection from "./components/MissionSection";
import ProgramsSection from "./components/Programs";
import ContactSection from "./components/Contact"

import Navbar from "./components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";



function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <ProgramsSection />
      <ContactSection />
      <QueriesSection />
      <Footer />
    </div>
  );
}













export default App;
