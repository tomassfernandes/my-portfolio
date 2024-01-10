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
              <a>About Me</a>
            </li>
            <li className="nav-li">
              <a>Resume</a>
            </li>
            <li className="nav-li">
              <a>Projects</a>
            </li>
            <li className="get-in-touch-btn nav-li">
              <a>Get in touch!</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
