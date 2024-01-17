import { useState, useEffect } from "react";

export default function ProjectsItem() {
  const data = [
    {
      title: "Car Saver",
      img: "/img/car-saver-website-img.png",
      text: "Car Saver, a website built with React, has a sleek and intuitive interface. You can seamlessly switch between different car models, navigate through the testimonials slider and click on the user-friendly FAQ section, and witness a smooth expansion of detailed answers.",
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
      text: "Home Nectar welcomes you with a visually captivating layout that harmonizes the precision of Flexbox and the flexibility of Grid, an aesthetic experience that mirrors the natural beauty of the honey it showcases. Immerse yourself in the interactive shopping cart experience on Home Nectar. While you can't make actual purchases, the dynamic cart allows you to simulate the delightful process of selecting your favorite honey.",
      language1: "HTML",
      language2: "CSS",
      language3: "JS",
      language4: "React",
      link: "https://home-nectar-tomas-fernandes.netlify.app/",
      key: 2,
    },

    {
      title: "My Tennis",
      img: "/img/my-tennis-website-img.png",
      text: "My Tennis stands out as a dynamic multipage website, crafted with precision and powered by React. Explore all club information effortlessly, from membership details to court facilities. The platform allows users to check class availability throughout the week by simply clicking on the respective days.",
      language1: "HTML",
      language2: "CSS",
      language3: "JS",
      language4: "React",
      link: "https://my-tennis-tomas-fernandes.netlify.app/",
      key: 3,
    },

    {
      title: "Cake Delight",
      img: "/img/cake-delight-website-img.png",
      text: "Cake Delight offers a visually stunning experience for cake enthusiasts.  Choose between All, Vegan, and Vegetarian categories to tailor your cake selection, also allowing you to add your preferred ingredients to your chosen cakes. While you can't make actual purchases, the intuitive design allows you to curate your dream cake collection, providing a taste of the excitement of the real shopping experience.",
      language1: "HTML",
      language2: "CSS",
      language3: "JS",
      language4: "React",
      link: "https://cake-delight-tomas-fernandes.netlify.app/",
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
          <p className="projects-languages-text">{item.language1}</p>
          <p className="projects-languages-text">{item.language2}</p>
          <p className="projects-languages-text">{item.language3}</p>
          <p className="projects-languages-text">{item.language4}</p>
        </div>
      </div>
    </a>
  ));
}
