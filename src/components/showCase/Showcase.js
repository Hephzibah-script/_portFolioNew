import React from "react";
// import { projects } from "../../data/Projects";
import "./Showcase.css";

const projects = [
  {
    title: "Project One",
    description: "This is a brief description of Project One.",
    image: "path/to/image1.jpg", // Replace with actual path or URL
    link: "https://link-to-project-one.com",
    imageUrl: "Australia.jpeg",
  },
  {
    title: "Project Two",
    description: "This is a brief description of Project Two.",
    image: "images/Geirangerfjord_Norway.jpeg", // Replace with actual path or URL
    link: "https://link-to-project-two.com",
    imageUrl: "../../images/Australia.jpeg",
  },
  {
    title: "Project Three",
    description: "This is a brief description of Project Three.",
    image: "path/to/image3.jpg", // Replace with actual path or URL
    link: "https://link-to-project-three.com",
    imageUrl: "house.jpg",
  },
];

const Showcase = () => {
  return (
    <section className="showcase">
      <h1>Projects</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;
