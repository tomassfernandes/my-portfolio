import { useState, useEffect } from "react";

export default function ProjectsItem() {
  const gitHubIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ionicon"
      viewBox="0 0 512 512"
    >
      <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
    </svg>
  );

  const data = [
    {
      title: "Car Saver",
      img: "/img/car-saver-website-img.png",
      text: "Car Saver, a website built with React, has a sleek and intuitive interface. You can seamlessly switch between different car models, navigate through the testimonials slider and click on the user-friendly FAQ section, and witness a smooth expansion of detailed answers.",
      icon: gitHubIcon,
      language4: "React",
      link: "https://car-saver-tomas-fernandes.netlify.app/",
      githubLink: "https://github.com/tomassfernandes/car-second-hand-website",
      key: 1,
    },

    {
      title: "Home Nectar",
      img: "/img/home-nectar-website-img.png",
      text: "Home Nectar welcomes you with a visually captivating layout that harmonizes the precision of Flexbox and the flexibility of Grid, an aesthetic experience that mirrors the natural beauty of the honey it showcases. Immerse yourself in the interactive shopping cart experience on Home Nectar. While you can't make actual purchases, the dynamic cart allows you to simulate the delightful process of selecting your favorite honey.",
      icon: gitHubIcon,
      language4: "React",
      link: "https://home-nectar-tomas-fernandes.netlify.app/",
      githubLink: "https://github.com/tomassfernandes/home-nectar",
      key: 2,
    },

    {
      title: "My Tennis",
      img: "/img/my-tennis-website-img.png",
      text: "My Tennis stands out as a dynamic multipage website, crafted with precision and powered by React. Explore all club information effortlessly, from membership details to court facilities. The platform allows users to check class availability throughout the week by simply clicking on the respective days.",
      icon: gitHubIcon,
      language4: "React",
      link: "https://my-tennis-tomas-fernandes.netlify.app/",
      githubLink: "https://github.com/tomassfernandes/my-tennis-website",
      key: 3,
    },

    {
      title: "Cake Delight",
      img: "/img/cake-delight-website-img.png",
      text: "Cake Delight offers a visually stunning experience for cake enthusiasts.  Choose between All, Vegan, and Vegetarian categories to tailor your cake selection, also allowing you to add your preferred ingredients to your chosen cakes. While you can't make actual purchases, the intuitive design allows you to curate your dream cake collection, providing a taste of the excitement of the real shopping experience.",
      icon: gitHubIcon,
      language4: "React",
      link: "https://cake-delight-tomas-fernandes.netlify.app/",
      githubLink: "https://github.com/tomassfernandes/cake-delight",
      key: 4,
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

  const [projectsIsInViewport, setProjectsIsInViewport] = useState(false);
  const [projectsHasClassApplied, setProjectsHasClassApplied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = document
        .querySelector(".projects-grid-item")
        .getBoundingClientRect();
      const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isInView && !projectsHasClassApplied) {
        setProjectsIsInViewport(true);
        setProjectsHasClassApplied(true);
      } else if (!isInView && projectsHasClassApplied) {
        // If you want to remove the class when out of view
        setProjectsIsInViewport(false);
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
  }, [projectsHasClassApplied]);

  return data.map((item, index) => (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      key={item.key}
      className={`projects-grid-item ${
        hoveredItem !== null && index !== hoveredItem ? "not-hovered" : ""
      } ${
        item.key === 1 || item.key === 3 ? "projects-grid-item-position-1" : ""
      } ${
        item.key === 2 || item.key === 4 ? "projects-grid-item-position-2" : ""
      } ${projectsHasClassApplied ? "projects-grid-item-final-position" : ""}`}
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
          <p className="projects-languages-text">{item.language4}</p>
          <a
            href={item.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="projects-languages-icon"
          >
            {item.icon}
          </a>
        </div>
      </div>
    </a>
  ));
}
