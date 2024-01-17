import { Link } from "react-scroll";
import { useRef } from "react";

export default function Header() {
  const menuIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ionicon"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="32"
        d="M80 160h352M80 256h352M80 352h352"
      />
    </svg>
  );

  const closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ionicon"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
        d="M368 368L144 144M368 144L144 368"
      />
    </svg>
  );

  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

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

        <nav ref={navRef}>
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
              <div>My CV</div>
            </li>
          </ul>
          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            {closeIcon}
          </button>
        </nav>
        <button className="nav-btn nav-menu-btn" onClick={showNavBar}>
          {menuIcon}
        </button>
      </div>
    </header>
  );
}
