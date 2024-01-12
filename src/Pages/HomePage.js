import React, { useRef, useEffect, useState } from "react";
import Header from "../HomePage Sections/Header";
import IntroSection from "../HomePage Sections/IntroSection";
import ResumeSection from "../HomePage Sections/ResumeSection";
import ProjectsSection from "../HomePage Sections/ProjectsSection";
import { Link } from "react-scroll";

export default function HomePage() {
  return (
    <>
      <Header />
      <IntroSection />
      <ResumeSection />
      <ProjectsSection />
      <div className="scroll-div">
        <Link to="intro-section" smooth={true} className="scroll-shape-div">
          <div id="scroll-losange-1" className="scroll-losange"></div>
        </Link>

        <Link
          to="resume-section"
          smooth={true}
          spy={true}
          className="scroll-shape-div"
        >
          <div id="scroll-losange-2" className="scroll-losange"></div>
        </Link>
      </div>
    </>
  );
}
