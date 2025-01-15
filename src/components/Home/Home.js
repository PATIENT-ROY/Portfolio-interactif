import React from 'react';
import './Home.css';

function Home() {
  return (
    <header className="homer">
      <div className="home__wrapper">
        <h1 className="home__title">Welcome to My Site</h1>
        <strong>
          Hi, my name is <em>Papy Roy</em>
        </strong>
        <br />a frontend developer
        <div className="home__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href="#!" className="btn">
          Download CV
        </a>
      </div>
    </header>
  );
}

export default Home;

