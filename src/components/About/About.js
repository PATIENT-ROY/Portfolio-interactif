import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about">
      <div className="about__wrapper">
        <div className="about__section">
          <h2 className="about__title">Frontend</h2>
          <p className="about__description">
            With passion for learning and creating.
          </p>
          <ul className="about__list">
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>HTML & CSS</li>
            <li>BootStrap</li>
            <li>StyledComponents</li>
          </ul>
        </div>
        
        <div className="about__section">
          <h2 className="about__title">Built With</h2>
          <p className="about__description">
            This project was built using these technologies.
          </p>
          <ul className="about__list">
            <li>React.js</li>
            <li>JavaScript</li>
            <li>tools: webpack</li>
            <li>VsCode</li>
            <li>version control(GIT, GITHUB)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;






