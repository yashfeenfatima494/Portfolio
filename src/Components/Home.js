import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { IoIosArrowUp } from "react-icons/io";
import javascript from "../Assets/javascript.png";
import html from "../Assets/html.png";
import java from "../Assets/java.png";
import python from "../Assets/python.png";
import react from "../Assets/react.png";
import css from "../Assets/css.png";
import nodejs from "../Assets/nodejs.png";
import mongodb from "../Assets/mongodb.png";
import express from "../Assets/expressjs.png";
import redux from "../Assets/redux.png";
import github from "../Assets/github.png";
import nextjs from "../Assets/nextjs.png";

const Home = ({ setShowLink }) => {
  const isMobile = useMediaQuery({ query: "(min-width: 650px)" });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="home">
      <div className="about">
        <div className="profile">
          <h1>
            <span className="there">Hi there! </span>
            {!isMobile ? <span className="osama">I'm Yashfeen,</span> : ""}
          </h1>
          <h1>
            {isMobile ? <span className="osama">I'm Yashfeen, </span> : ""}
            <span className="developer">A Frontend Developer</span>
          </h1>
        </div>
        <p>
          Frontend-focused developer building scalable web applications using ReactJs. Skilled in developing
          high-performance user interfaces, integrating backend APIs, and delivering responsive products with
          strong emphasis on performance, usability, and clean architecture.
        </p>
        <div>
          <button className="btn2 resume noSelect">
            <a
              href="https://drive.google.com/file/d/1JO73mzkOm1MyPf20xatKuK98BmJ7ixKL/view?usp=sharing"
              className="anchor"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </button>
        </div>
      </div>
      <div className="project-container">
        <h1>My Work</h1>
        <div className="project-card">
          <div className="card">
            <h3>Weather App</h3>
            <small>
              <time>10th May, 2026</time>
            </small>
            <p>A simple weather app that display real-time weather information.</p>

            <div className="span-div">
              <span>HTML</span>
              <span>CSS</span>
              <span>ReactJs</span>
            </div>

            <div className="button-container">
              <button className="btn view noSelect">
                <a
                  href="https://weather-yf.netlify.app/"
                  className="anchor"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live
                </a>
              </button>
              <button className="btn2 noSelect">
                <a
                  href="https://github.com/yashfeenfatima494/WeatherApp"
                  className="anchor"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Source
                </a>
              </button>
            </div>
          </div>
          <div className="card middle">
            <h3>Tic Tac Toe</h3>
            <small>
              <time>15th February, 2026</time>
            </small>
            <p>It is a browser-based Tic Tac Toe game with win detection.</p>

            <div className="span-div">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="button-container">
              <button className="btn view noSelect">
                <a
                  href="https://tictactoe-yf.netlify.app/"
                  className="anchor"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live
                </a>
              </button>
              <button className="btn2 noSelect">
                <a
                  href="https://github.com/yashfeenfatima494/TicTacToe"
                  className="anchor"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Source
                </a>
              </button>
            </div>
          </div>
          <div className="card">
            <h3>Amazon Design</h3>
            <small>
              <time>10th November, 2025</time>
            </small>
            <p>A static e-commerce website inspired by Amazone. </p>

            <div className="span-div">
              <span>HTML</span>
              <span>CSS</span>
            </div>

            <div className="button-container">
              <button className="btn view noSelect">
                <a
                  href="https://amazondesign-yf.netlify.app/"
                  className="anchor"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live
                </a>
              </button>
              <button className="btn2 noSelect">
                <a
                  href="https://github.com/yashfeenfatima494/AmazonDesign"
                  className="anchor"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Source
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="button">
          <button className="btn noSelect">
            <Link className="anchor" to="/projects" onClick={() => setShowLink(2)}>
              View All
            </Link>
          </button>
        </div>
      </div>

      <div className="skills">
        <h1>My Skills</h1>
        <div className="skill-card">
          <div className="image">
            <img src={react} alt="react" />
            <h4>ReactJs</h4>
          </div>
          <div className="image">
            <img src={javascript} alt="JavaScript" />
            <h4>JavaScript</h4>
          </div>
          <div className="image">
            <img src={html} alt="html" />
            <h4>HTML5</h4>
          </div>
          <div className="image">
            <img src={css} alt="css" />
            <h4>CSS3</h4>
          </div>
          <div className="image">
            <img src={github} alt="github" />
            <h4>Github</h4>
          </div>
        </div>
      </div>

      <div className="scroll">
        <IoIosArrowUp className="scrollbutton noSelect" onClick={scrollToTop} />
        <span onClick={scrollToTop} className="noSelect">Top</span>
      </div>
    </div>
  );
};

export default Home;
