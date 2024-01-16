import { useEffect, useState } from "react";

export default function ResumeSection() {
  const [resumeIsInViewport, setResumeIsInViewport] = useState(false);
  const [resumeHasClassApplied, setResumeHasClassApplied] = useState(false);

  const [hobbiesIsInViewport, setHobbiesIsInViewport] = useState(false);
  const [hobbiesHasClassApplied, setHobbiesHasClassApplied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = document
        .querySelector(".resume-title-div")
        .getBoundingClientRect();
      const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isInView && !resumeHasClassApplied) {
        setResumeIsInViewport(true);
        setResumeHasClassApplied(true);
      } else if (!isInView && resumeHasClassApplied) {
        // If you want to remove the class when out of view
        setResumeIsInViewport(false);
      }
    };

    // Initial check when the component mounts
    handleScroll();

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [resumeHasClassApplied]);

  useEffect(() => {
    const handleScroll = () => {
      const rect = document
        .querySelector(".hobbies-div")
        .getBoundingClientRect();
      const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isInView && !hobbiesHasClassApplied) {
        setHobbiesIsInViewport(true);
        setHobbiesHasClassApplied(true);
      } else if (!isInView && hobbiesHasClassApplied) {
        // If you want to remove the class when out of view
        setHobbiesIsInViewport(false);
      }
    };

    // Initial check when the component mounts
    handleScroll();

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hobbiesHasClassApplied]);

  return (
    <section id="resume-section" className="resume-section">
      <div className="resume-inner-div">
        <div className="resume-grid">
          <div className="resume-column">
            <div className="resume-education-div">
              <h2 className="heading-secondary">Education</h2>
              <div className="resume-education-text-div">
                <img
                  className="resume-bullet-point"
                  src="/img/bullet-point-icon.png"
                  alt="bullet point icon"
                />
                <p className="resume-education-date">2017-2021</p>
                <div className="resume-education-text-inner-div">
                  <p className="resume-education-institution-p">
                    University of Coimbra, Portugal
                  </p>
                  <p>Sports Science</p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-column">
            <div className="resume-title-div">
              <p
                className={`resume-title-p ${
                  resumeHasClassApplied ? "resume-title-p-in-view" : ""
                }`}
              >
                RESUME
              </p>
              <p
                className={`resume-title-p resume-title-p-position-1 ${
                  resumeHasClassApplied ? "position-1-visible" : ""
                }`}
              >
                RESUME
              </p>
              <p
                className={`resume-title-p resume-title-p-position-2 ${
                  resumeHasClassApplied ? "position-2-visible" : ""
                }`}
              >
                RESUME
              </p>
            </div>

            <div className="skills-main-div">
              <h2 className="heading-secondary">Technical skills</h2>

              <div className="skills-div">
                <div className="skills-inner-div">
                  <h3 className="heading-terciary">Code Languages</h3>

                  <div className="code-languages-div">
                    <img
                      className="code-language-icon html-icon"
                      src="/img/html-icon.png"
                      alt="HTML icon"
                    />
                    <img
                      className="code-language-icon"
                      src="/img/css-icon.png"
                      alt="CSS icon"
                    />
                    <img
                      className="code-language-icon"
                      src="/img/js-icon.png"
                      alt="JS icon"
                    />
                  </div>
                </div>

                <div className="skills-inner-div">
                  <h3 className="heading-terciary">Frameworks</h3>
                  <img
                    className="code-language-icon"
                    src="/img/react-icon.png"
                    alt="React icon"
                  />
                </div>
              </div>

              <div className="skills-writen-div">
                <div className="skills-writen-inner-div">
                  <p className="skills-writen-p">Responsive Web Design</p>
                  <p className="skills-writen-p">UI/UX Design</p>
                </div>
                <div className="skills-writen-inner-div">
                  <p className="skills-writen-p">GitHub</p>
                  <p className="skills-writen-p">Performance Optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="resume-inner-div-2">
        <div className="resume-inner-div">
          <div className="resume-grid">
            <div className="resume-column">
              <div className="education-img-div">
                <img
                  className="education-img"
                  src="/img/education.png"
                  alt="Books and graduation hat"
                />
              </div>

              <div className="certificates-box">
                <h2 className="heading-secondary heading-secondary-white">
                  Certificates
                </h2>
                <div className="certificates-main-div">
                  <div className="certificates-div">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://drive.google.com/file/d/1oVZMGFL5mwxdIFL8iuEtdgV5Zm2Pb2Yt/view"
                      className="certificates-inner-div"
                    >
                      <div className="certificate-link">Front-End Engineer</div>
                      <p>Institution: Codecademy</p>
                    </a>
                    <a
                      href="https://www.udemy.com/certificate/UC-19dd611d-57b4-4834-a8f9-fb2c8a267357/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certificates-inner-div"
                    >
                      <div className="certificate-link">
                        The Complete Javascript Course 2023: From Zero to Expert
                      </div>
                      <p>Institution: Udemy</p>
                    </a>
                  </div>

                  <div className="certificates-div">
                    <a
                      href="https://www.udemy.com/certificate/UC-d8e9592f-5e66-4545-a32b-1e75ea25a47a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certificates-inner-div"
                    >
                      <div className="certificate-link">
                        Build Responsive Real-World Websites with HTML and CSS
                      </div>
                      <p>Institution: Udemy</p>
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1c7JKq_aNe2Z6hoQMuMN6Z4DSo_yVgrot/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certificates-inner-div"
                    >
                      <div className="certificate-link">English Level B2</div>
                      <p>Institution: Cambridge University</p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-main-div">
                <h2 className="heading-secondary heading-secondary-white">
                  Contact
                </h2>
                <div className="contact-div">
                  <p className="contact-div-text">
                    <span>Email:</span> fernandesstomas@gmail.com
                  </p>
                  <p className="contact-div-text">
                    <span>Phone:</span> +351 918 040 883
                  </p>
                </div>
              </div>
            </div>
            <div className="resume-column resume-column-2">
              <div className="language-main-div">
                <h3 className="heading-secondary heading-secondary-white">
                  Language
                </h3>
                <div className="language-div">
                  <div className="language-inner-div">
                    <h3 className="heading-terciary heading-terciary-white">
                      Portuguese
                    </h3>
                    <p>Native</p>
                  </div>
                  <div className="language-inner-div">
                    <h3 className="heading-terciary heading-terciary-white">
                      English
                    </h3>
                    <p>Fluent</p>
                  </div>
                </div>
              </div>

              <div className="hobbies-main-div">
                <h2 className="heading-secondary heading-secondary-white">
                  Hobbies & Interests
                </h2>
                <div className="hobbies-div">
                  <div
                    className={`hobbies-inner-div hobbies-inner-div-1 ${
                      hobbiesHasClassApplied ? "hobbies-inner-div-final" : ""
                    }`}
                  >
                    <img
                      className="hobbies-icon"
                      src="/img/tennis-icon.png"
                      alt="Tennis icon"
                    />
                    <p>Tennis and padel</p>
                  </div>

                  <div
                    className={`hobbies-inner-div hobbies-inner-div-2 ${
                      hobbiesHasClassApplied ? "hobbies-inner-div-final" : ""
                    }`}
                  >
                    <img
                      className="hobbies-icon"
                      src="/img/playstation-icon.png"
                      alt="Playstation icon"
                    />
                    <p>Gaming</p>
                  </div>

                  <div
                    className={`hobbies-inner-div hobbies-inner-div-3 ${
                      hobbiesHasClassApplied ? "hobbies-inner-div-final" : ""
                    }`}
                  >
                    <img
                      className="hobbies-icon"
                      src="/img/film-roll-icon.png"
                      alt="35mm film roll icon"
                    />
                    <p>Film photography</p>
                  </div>

                  <div
                    className={`hobbies-inner-div hobbies-inner-div-4 ${
                      hobbiesHasClassApplied ? "hobbies-inner-div-final" : ""
                    }`}
                  >
                    <img
                      className="hobbies-icon hobbies-beer-icon"
                      src="/img/beer-icon.png"
                      alt="Beer icon"
                    />
                    <p>Hanging out with friends</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="custom-shape-divider-bottom-1704891408">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
}
