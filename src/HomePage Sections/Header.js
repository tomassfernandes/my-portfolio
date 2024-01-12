import { Link } from "react-scroll";

export default function Header() {
  return (
    <header className="header">
      <div className="header-main-div">
        <div className="logo-div">
          <img
            className="code-icon-img"
            src="/img/code-icon.png"
            alt="Coding icon"
          />
          <p className="logo-text">Tomás Fernandes</p>
        </div>

        <nav>
          <ul className="nav-ul">
            <li className="nav-li">
              <Link to="intro-section" smooth={true}>
                <div>About Me</div>
              </Link>
            </li>
            <li className="nav-li">
              <Link to="resume-section" smooth={true}>
                <div>Resume</div>
              </Link>
            </li>
            <li className="nav-li">
              <Link to="projects-section" smooth={true}>
                <div>Projects</div>
              </Link>
            </li>
            <li className="get-in-touch-btn nav-li">
              <div>Get in touch!</div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
