export default function ResumeSection() {
  return (
    <section>
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
              <p className="resume-title-p">RESUME</p>
              <p className="resume-title-p">RESUME</p>
              <p className="resume-title-p">RESUME</p>
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
                  <h3>Library</h3>
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
                    <div className="certificates-inner-div">
                      <a className="certificate-link">Front-End Engineer</a>
                      <p>Institution: Codecademy</p>
                    </div>
                    <div className="certificates-inner-div">
                      <a className="certificate-link">
                        The Complete Javascript Course 2023: From Zero to Expert
                      </a>
                      <p>Institution: Udemy</p>
                    </div>
                  </div>

                  <div className="certificates-div">
                    <div className="certificates-inner-div">
                      <a>
                        Build Responsive Real-World Websites with HTML and CSS
                      </a>
                      <p>Institution: Udemy</p>
                    </div>
                    <div className="certificates-inner-div">
                      <a>English Level B2</a>
                      <p>Institution: Cambridge University</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-column">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
