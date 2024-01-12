import { useEffect, useState } from "react";

export default function ResumeSection() {
  const instaIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ionicon"
      viewBox="0 0 512 512"
    >
      <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
      <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
    </svg>
  );

  const twitterIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ionicon"
      viewBox="0 0 512 512"
    >
      <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" />
    </svg>
  );

  const linkedinIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ionicon"
      viewBox="0 0 512 512"
    >
      <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
    </svg>
  );

  const [isInViewport, setIsInViewport] = useState(false);
  const [hasClassApplied, setHasClassApplied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = document
        .querySelector(".resume-title-div")
        .getBoundingClientRect();
      const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isInView && !hasClassApplied) {
        setIsInViewport(true);
        setHasClassApplied(true);
      } else if (!isInView && hasClassApplied) {
        // If you want to remove the class when out of view
        setIsInViewport(false);
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
  }, [hasClassApplied]);

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
                  hasClassApplied ? "resume-title-p-in-view" : ""
                }`}
              >
                RESUME
              </p>
              <p
                className={`resume-title-p resume-title-p-position-1 ${
                  hasClassApplied ? "position-1-visible" : ""
                }`}
              >
                RESUME
              </p>
              <p
                className={`resume-title-p resume-title-p-position-2 ${
                  hasClassApplied ? "position-2-visible" : ""
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
                <div className="socials-div">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socials-icon"
                    href="https://www.linkedin.com/in/tomas-silva-fernandes/"
                  >
                    {linkedinIcon}
                  </a>
                  <a
                    href="https://www.instagram.com/tomassfernandes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socials-icon"
                  >
                    {instaIcon}
                  </a>
                  <a
                    href="https://twitter.com/tomassfernandes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socials-icon"
                  >
                    {twitterIcon}
                  </a>
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
                  <div className="hobbies-inner-div">
                    <img
                      className="hobbies-icon"
                      src="/img/tennis-icon.png"
                      alt="Tennis icon"
                    />
                    <p>Tennis and padel</p>
                  </div>

                  <div className="hobbies-inner-div">
                    <img
                      className="hobbies-icon"
                      src="/img/playstation-icon.png"
                      alt="Playstation icon"
                    />
                    <p>Gaming</p>
                  </div>

                  <div className="hobbies-inner-div">
                    <img
                      className="hobbies-icon"
                      src="/img/film-roll-icon.png"
                      alt="35mm film roll icon"
                    />
                    <p>Film photography</p>
                  </div>

                  <div className="hobbies-inner-div">
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
