import { useState } from "react";

export default function ProjectsItem() {
  const data = [
    {
      title: "Car Saver",
      img: "/img/car-saver-website-img.png",
      text: "I am proud to present the Imaginary Auto Marketplace a fictional website designed to showcase my skills in web development using React, JavaScript, HTML, and CSS. This project focuses on creating a user-friendly platform for exploring and browsing second-hand cars, even though the actual purchase functionality is omitted as it remains a conceptual exercise.",
      language1: "HTML",
      language2: "CSS",
      language3: "JS",
      language4: "React",
      link: "https://car-saver-tomas-fernandes.netlify.app/",
      key: 1,
    },

    {
      title: "Home Nectar",
      img: "/img/home-nectar-website-img.png",
      text: "I am proud to present the Imaginary Auto Marketplace a fictional website designed to showcase my skills in web development using React, JavaScript, HTML, and CSS. This project focuses on creating a user-friendly platform for exploring and browsing second-hand cars, even though the actual purchase functionality is omitted as it remains a conceptual exercise.",
      language1: "HTML",
      language2: "CSS",
      language3: "JS",
      language4: "React",
      link: "https://home-nectar-tomas-fernandes.netlify.app/",
      key: 1,
    },

    {
      title: "My Tennis",
      img: "/img/my-tennis-website-img.png",
      text: "I am proud to present the Imaginary Auto Marketplace a fictional website designed to showcase my skills in web development using React, JavaScript, HTML, and CSS. This project focuses on creating a user-friendly platform for exploring and browsing second-hand cars, even though the actual purchase functionality is omitted as it remains a conceptual exercise.",
      language1: "HTML",
      language2: "CSS",
      language3: "JS",
      language4: "React",
      link: "https://my-tennis-tomas-fernandes.netlify.app/",
      key: 1,
    },

    {
      title: "Cake Delight",
      img: "/img/cake-delight-website-img.png",
      text: "I am proud to present the Imaginary Auto Marketplace a fictional website designed to showcase my skills in web development using React, JavaScript, HTML, and CSS. This project focuses on creating a user-friendly platform for exploring and browsing second-hand cars, even though the actual purchase functionality is omitted as it remains a conceptual exercise.",
      language1: "HTML",
      language2: "CSS",
      language3: "JS",
      language4: "React",
      link: "https://cake-delight-tomas-fernandes.netlify.app/",
      key: 1,
    },
  ];

  const arrowsUp = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M480-200v-360H120v-80h440v440h-80Zm200-200v-360H320v-80h440v440h-80Z" />
    </svg>
  );

  const [hoveredItem, setHoveredItem] = useState(null);

  return data.map((item, index) => (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      key={item.key}
      className={`projects-grid-item ${
        hoveredItem !== null && index !== hoveredItem ? "not-hovered" : ""
      }`}
      onMouseEnter={() => setHoveredItem(index)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <div className="projects-img-div">
        <img
          className="projects-img"
          src={item.img}
          alt={`${item.title} website preview`}
        />
      </div>
      <div className="projects-text-div">
        <div className="projects-title-div">
          <h2 className="projects-title">{item.title}</h2>
          <span className="arrows-up-icon">{arrowsUp}</span>
        </div>

        <p className="projects-description">{item.text}</p>

        <div className="projects-languages-div">
          <p className="projects-languages-text">{item.language1}</p>
          <p className="projects-languages-text">{item.language2}</p>
          <p className="projects-languages-text">{item.language3}</p>
          <p className="projects-languages-text">{item.language4}</p>
        </div>
      </div>
    </a>
  ));
}
