import React from "react";
import './homepage.styles.scss';
import ReactMessage from "../../components/react-message/react-message.component";
import Toolbar from "../../components/toolbar/toolbar.component";
import MainSection from "../../sections/main-section/main-section.component";
import SkillsSection from "../../sections/skills-section/skills-section.component";
import ContactSection from "../../sections/contact-section/contact-section.component";

const HomePage = () => (
    <div className="App">
      <Toolbar />
      <MainSection />
      <SkillsSection />
      <ContactSection />
      <ReactMessage />
    </div>
);

export default HomePage;