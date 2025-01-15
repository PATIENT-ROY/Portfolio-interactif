import React from 'react';
import './Projects.css';

function Projects() {
  const handleClick = (projectName) => {
    alert(`Navigating to ${projectName}`);
     
  };

  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Projects</h1>
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Project 1: Portfolio Website</h2>
            <p>
              This is my first project, a portfolio website built with React. 
              It showcases my skills, experience, and the projects I've worked on.
            </p>
            <button onClick={() => handleClick('Portfolio Website')} className="project-link">View Project</button>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Project 2: Todo App</h2>
            <p>
              A simple Todo App created using React and LocalStorage for managing tasks.
            </p>
            <button onClick={() => handleClick('Todo App')} className="project-link">View Project</button>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Project 3: Weather App</h2>
            <p>
              A weather forecast app built with React and the OpenWeather API, showing current weather conditions in different cities.
            </p>
            <button onClick={() => handleClick('Weather App')} className="project-link">View Project</button>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Projects;

