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
            <div className="skills-div">
              <h2 className="heading-secondary">Technical skills</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
