import React, { useRef, useEffect, useState } from "react";
import Header from "../HomePage Sections/Header";
import IntroSection from "../HomePage Sections/IntroSection";
import ResumeSection from "../HomePage Sections/ResumeSection";
import ProjectsSection from "../HomePage Sections/ProjectsSection";
import { Link } from "react-scroll";

export default function HomePage() {
  const [isIntroSectionVisible, setIsIntroSectionVisible] = useState(false);
  const [isLosange1Intersecting, setIsLosange1Intersecting] = useState(false);
  const [isLosange2Intersecting, setIsLosange2Intersecting] = useState(false);

  const introSectionRef = useRef(null);
  const losange1Ref = useRef(null);
  const losange2Ref = useRef(null);

  const handleIntroSectionIntersection = (entries) => {
    entries.forEach((entry) => {
      setIsIntroSectionVisible(entry.isIntersecting);
    });
  };

  const handleLosange1Intersection = (entries) => {
    entries.forEach((entry) => {
      setIsLosange1Intersecting(entry.isIntersecting);
    });
  };

  const handleLosange2Intersection = (entries) => {
    entries.forEach((entry) => {
      setIsLosange2Intersecting(entry.isIntersecting);
    });
  };

  useEffect(() => {
    const introSectionObserver = new IntersectionObserver(
      handleIntroSectionIntersection,
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    const losange1Observer = new IntersectionObserver(
      handleLosange1Intersection,
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    const losange2Observer = new IntersectionObserver(
      handleLosange2Intersection,
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (introSectionRef.current) {
      introSectionObserver.observe(introSectionRef.current);
    }

    if (losange1Ref.current) {
      losange1Observer.observe(losange1Ref.current);
    }

    if (losange2Ref.current) {
      losange2Observer.observe(losange2Ref.current);
    }

    return () => {
      if (introSectionRef.current) {
        introSectionObserver.unobserve(introSectionRef.current);
      }

      if (losange1Ref.current) {
        losange1Observer.unobserve(losange1Ref.current);
      }

      if (losange2Ref.current) {
        losange2Observer.unobserve(losange2Ref.current);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <IntroSection ref={introSectionRef} />
      <ResumeSection />
      <ProjectsSection />
      <div className="scroll-div">
        <Link
          to="intro-section"
          smooth={true}
          spy={true}
          className={`scroll-shape-div ${
            isLosange1Intersecting && isIntroSectionVisible
              ? "scroll-losange-color-change"
              : ""
          }`}
        >
          <div
            id="scroll-losange-1"
            className="scroll-losange"
            ref={losange1Ref}
          ></div>
        </Link>

        <Link
          to="resume-section"
          smooth={true}
          spy={true}
          className={`scroll-shape-div ${
            isLosange2Intersecting && isIntroSectionVisible
              ? "scroll-losange-color-change"
              : ""
          }`}
        >
          <div
            id="scroll-losange-2"
            className="scroll-losange"
            ref={losange2Ref}
          ></div>
        </Link>
      </div>
    </>
  );
}
