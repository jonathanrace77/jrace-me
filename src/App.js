import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import animations from "./animations.js";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min";

var images = {
  logo: require("./img/logo_dark.png"),
  blank: require("./img/blank.png"),
  sketch: require("./img/sketch.png"),
  photoshop: require("./img/photoshop.jpg"),
  illustrator: require("./img/illustrator.jpg"),
  html: require("./img/html5.png"),
  css: require("./img/css3.png"),
  sass: require("./img/scss.png"),
  bootstrap: require("./img/bootstrap.png"),
  javascript: require("./img/es6.png"),
  jquery: require("./img/jquery.png"),
  react: require("./img/react.png"),
  redux: require("./img/redux.png"),
  d3: require("./img/d3.png"),
  wordpress: require("./img/wordpress.png"),
  sql: require("./img/sql.png"),
  php: require("./img/php.png"),
  node: require("./img/node.png"),
  express: require("./img/express.png"),
  mongodb: require("./img/mongodb.png"),
  git: require("./img/git.png"),
  jonathan: require("./img/jonathan-profile-pic.jpg"),
  pdf: require("./img/pdf-logo.png"),
  linkedin: require("./img/linkedin.svg"),
  codepen: require("./img/codepen.svg"),
  hackerrank: require("./img/hackerrank.svg"),
  github: require("./img/github.svg"),
};

var threeImport = require("./three.min.js");

var cv = require("./JonathanRaceCv.pdf");

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(0);
  const [isBoxOpen, setIsBoxOpen] = React.useState(0);
  const [isSelectedBox, setIsSelectedBox] = React.useState({
    blank: 0,
    sketch: 1,
    photoshop: 1,
    illustrator: 1,
    html: 1,
    css: 1,
    sass: 1,
    bootstrap: 1,
    javascript: 1,
    jquery: 1,
    react: 1,
    redux: 1,
    d3: 1,
    wordpress: 1,
    node: 1,
    php: 1,
    sql: 1,
    mongodb: 1,
    express: 1,
    eslint: 1,
    jest: 1,
    git: 1,
  });
  const projectTechList = [
    ["sketch", "photoshop", "html", "sass", "javascript", "jquery", "git"],
    ["photoshop", "wordpress", "css", "blank", "blank", "blank", "blank"],
    ["sketch", "photoshop", "html", "sass", "javascript", "jquery", "blank"],
    ["sketch", "html", "css", "javascript", "jquery", "blank", "blank"],
  ];
  const handleAllButtonClick = () => {
    setIsBoxOpen(Math.abs(isBoxOpen - 1));
    // Messing with GSAP
    // gsap.from(".tech-column", { duration: 0.5, y: -50, opacity: 0 });
    // gsap.to(".tech-column", {
    //   duration: 0.3,
    //   y: 0,
    //   opacity: 1,
    //   ease: "back.out(1.7)",
    // });
  };
  const boxVisibility = isBoxOpen ? "grid" : "none";
  const allArrowDirection = isBoxOpen ? "rotate(180deg)" : "rotate(0deg)";

  const myRefAbout = useRef(null);
  const myRefProjects = useRef(null);
  const myRefContact = useRef(null);
  const executeScrollHero = () => scrollToRef(myRefHero);
  const executeScrollAbout = () => scrollToRef(myRefAbout);
  const executeScrollProjects = () => scrollToRef(myRefProjects);
  const executeScrollContact = () => scrollToRef(myRefContact);

  // When a checkbox is clicked, change the styling of the checkbox and update the state for it
  const handleCheckBoxClick = (e) => {
    handleCheckBoxStyling(e);
    setIsSelectedBox({
      ...isSelectedBox,
      [e.id]: Math.abs(isSelectedBox[e.id] - 1),
    });
  };

  // When state is updated, update the project selection
  useEffect(() => {
    updateProjectSelection();
  });

  const myRefHero = useRef(null);
  useLayoutEffect(() => {
    GLOBE({
      el: myRefHero.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 50.0,
      minWidth: 50.0,
      scale: 1.0,
      scaleMobile: 0.25,
      color: 0xe5e5e5,
      color2: 0x0f94c2,
      backgroundColor: 0xffffff,
    });
  });

  // code to run on component mount
  useEffect(() => {
    animations();
  }, []);

  // Loop through the project tech array and if any of them are selected (in the selectBox object) then show the element
  const updateProjectSelection = () => {
    for (let i = 0; i < projectTechList.length; i++) {
      document.getElementById("project" + i).style.display = "none";
      for (let j = 0; j < 7; j++) {
        if (isSelectedBox[projectTechList[i][j]] === 1) {
          document.getElementById("project" + i).style.display = "block";
        }
      }
    }
  };

  // If the box's state is 1 then use the box-checked class, otherwise use the box-unchecked class
  const handleCheckBoxStyling = (e) => {
    if (isSelectedBox[e.id] === 0) {
      document.getElementById(e.id).classList.add("check-box-checked");
      document.getElementById(e.id).classList.remove("check-box-unchecked");
      return;
    }
    document.getElementById(e.id).classList.add("check-box-unchecked");
    document.getElementById(e.id).classList.remove("check-box-checked");
  };

  // Reset the state of all checkboxes to 0
  const handleClearSelectionClick = () => {
    setIsSelectedBox({
      sketch: 0,
      photoshop: 0,
      illustrator: 0,
      html: 0,
      css: 0,
      sass: 0,
      bootstrap: 0,
      javascript: 0,
      jquery: 0,
      react: 0,
      redux: 0,
      d3: 0,
      wordpress: 0,
      node: 0,
      php: 0,
      sql: 0,
      mongodb: 0,
      express: 0,
      eslint: 0,
      jest: 0,
      git: 0,
    });

    // Get desired elements
    var element = document.getElementsByClassName("check-box");

    // Iterate through the retrieved elements and add the necessary class names.
    for (var i = 0; i < element.length; i++) {
      element[i].classList.add("check-box-unchecked");
      element[i].classList.remove("check-box-checked");
    }
  };

  function handleMobileMenuClick() {
    console.log("Checkpoint 1 - Success - button triggered", isMenuOpen);
    if (isMenuOpen === 0) {
      setIsMenuOpen(1);
    }
    if (isMenuOpen === 1) {
      setIsMenuOpen(0);
    }
  }

  // Creates the tech bar underneath each project
  function techCreator(projectNumber) {
    return (
      <div className="project-skills-container">
        {[0, 1, 2, 3, 4, 5, 6].map((n) => {
          var imgSrc = projectTechList[projectNumber][n];
          return (
            <div className="tech-square">
              <img
                alt="tech used"
                className="tech-square-img"
                src={images[imgSrc]}
              />
            </div>
          );
        })}
      </div>
    );
  }

  // Template for Skill bars
  function skillBarConstructor(tech, techName, level) {
    return (
      <div className="about-skill-container">
        <div className="about-skill-bar">
          <div
            id={tech + "-bar"}
            className="about-skill-bar-fill about-skill-bar-fill-design"
          ></div>
        </div>
        <div className="about-logo-bar-container">
          <div className="about-skill-logo">
            <img alt={tech + " css"} src={images[tech]}></img>
            <div className="about-skill-title">{techName}</div>
          </div>
        </div>
        <div className="about-skill-level">{level}</div>
      </div>
    );
  }

  // Template for tech Select boxes
  function techSelectConstructor(tech, techName) {
    return (
      <li>
        <div className="check-container">
          <div id={tech + "-check-label"} className="check-label">
            {techName}
          </div>
          <div
            onClick={(e) => handleCheckBoxClick(e.currentTarget)}
            id={tech}
            className="check-box check-box-checked"
          >
            <i className="fas fa-check"></i>
          </div>
        </div>
      </li>
    );
  }

  return (
    <div className="App">
      <script src={threeImport}></script>
      <div
        className="mobile-menu-button-container"
        onClick={handleMobileMenuClick}
      >
        <div className="mobile-menu-button">
          <i className="fa fa-bars"></i>
        </div>
      </div>
      <div className="header-container">
        <div className="logo-section">
          <div className="logo-container">
            <img
              alt="jonathan race logo"
              src={images.logo}
              onClick={executeScrollHero}
            ></img>
          </div>
          <div className="logo-caption">
            FRONT-END<br></br>WEB DEVELOPER
          </div>
        </div>
        <nav>
          <div className="header-menu-container">
            <ul>
              <li className="menu-border-right">
                <a href="#about-container" onClick={executeScrollAbout}>
                  ABOUT
                </a>
              </li>
              <li className="menu-border-right">
                <a href="#about-container" onClick={executeScrollAbout}>
                  SKILLS
                </a>
              </li>
              <li>
                <a href="#projects-container" onClick={executeScrollProjects}>
                  PORTFOLIO
                </a>
              </li>
              <li>
                <div className="header-contact" onClick={executeScrollContact}>
                  CONTACT
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <nav className="mobile-nav" style={{ visibility: isMenuOpen ? "visible" : "hidden" }}>
          <div
            className="header-menu-container-mobile"
          >
            <ul>
              <li className="menu-border-right">
                <a href="#about-container" onClick={executeScrollAbout}>
                  ABOUT
                </a>
              </li>
              <li className="menu-border-right">
                <a href="#about-container" onClick={executeScrollAbout}>
                  SKILLS
                </a>
              </li>
              <li>
                <a href="#projects-container" onClick={executeScrollProjects}>
                  PORTFOLIO
                </a>
              </li>
              <li>
                <a href="#header-contact" onClick={executeScrollContact}>
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="hero-container" ref={myRefHero}>
        <div className="hero-title">
          <h1>
            Hi, I'm <b>Jonathan</b>, <br></br>I'm a{" "}
            <span>Front-End Web Developer</span>
          </h1>
        </div>
      </div>
      <div className="about-container" ref={myRefAbout}>
        <h2 id="about-title">About</h2>

        <div className="about-jonathan-box">
          <div className="corner-top-left about-corner"></div>
          <div className="about-jonathan-box-left">
            <div className="jonathan-pic-container jonathan-box-left-gsap">
              <img alt="jonathan profile pic" src={images.jonathan}></img>
            </div>
            <div className="cv-download-container jonathan-box-left-gsap">
              <div>
                <img alt="jonathan cv download button" src={images.pdf}></img>
              </div>
              <div>
                <a href={cv}>Download my cv</a>
              </div>
            </div>
          </div>
          <div className="about-jonathan-box-right">
            <h3 className="about-jonathan-box-right-gsap">Jonathan Race</h3>
            <h4 className="about-jonathan-box-right-gsap">
              Front-End Web Developer
            </h4>
            <p className="about-jonathan-box-right-gsap">
              I've been working on web design for years now and I love the
              combination of problem-solving and creativity, it fuels my passion
              for each and every project, and I love learning new things every
              step of the way.
            </p>
            <p className="about-jonathan-box-right-gsap">
              {" "}
              I would love to work with you on your project. I build websites
              that are responsive, fast and designed to enhance the user's
              journey in any way possible. Let me know your ideas you already
              have when you contact, we can use that as a foundation and from
              there, <b>the sky is the limit!</b>
            </p>
          </div>
          <div className="cv-download-container-bottom">
            <div>
              <img alt="jonathan cv download button" src={images.pdf}></img>
            </div>
            <div>
              <a href={cv}>Download my cv</a>
            </div>
          </div>
        </div>
        <div id="experienced-about-skill-box" className="about-skill-box">
          <div className="corner-bottom-right about-corner"></div>

          {skillBarConstructor("html", "HTML", "Experienced")}
          {skillBarConstructor("css", "CSS", "Experienced")}
          {skillBarConstructor("javascript", "JavaScript", "Experienced")}
          {skillBarConstructor("wordpress", "Wordpress", "Experienced")}
          {skillBarConstructor("photoshop", "Photoshop", "Experienced")}
          {skillBarConstructor("react", "React", "Proficient")}
          {skillBarConstructor("sketch", "Sketch", "Proficient")}
          {skillBarConstructor("sass", "Sass", "Proficient")}

          <p id="extra-tech-skills-gsap">
            Further to this, I have familiarity with the following: Bootstrap,
            D3 JS, ESLint, Express, GIT, GSAP, Illustrator, JEST, jQuery,
            MongoDB, Next JS, Node JS, PHP, Redux, SQL, Svelte, Three JS & Vanta
            JS
          </p>
        </div>
      </div>
      <div className="projects-container" ref={myRefProjects}>
        <div className="projects-layer">
          <h2 id="projects-title">Projects</h2>
          <div id="tech-select-open-button-container">
            <div onClick={handleAllButtonClick} id="tech-select-open-button">
              <div>All Projects</div>
              <div>
                <i
                  id="all-arrow"
                  className="fa fa-caret-down"
                  style={{ transform: allArrowDirection }}
                ></i>
              </div>
            </div>
          </div>
          <div id="tech-select-container" style={{ display: boxVisibility }}>
            <div id="tech-select-grid">
              <div id="tech-design-column" className="tech-column">
                <div className="tech-title-container">
                  <i className="fas fa-paint-brush tech-icons"></i>
                  <div>
                    <h4>DESIGN</h4>
                  </div>
                </div>
                <div className="labels-container">
                  <ul className="labels-list">
                    {techSelectConstructor("sketch", "Sketch")}
                    {techSelectConstructor("photoshop", "Photoshop")}
                    {techSelectConstructor("illustrator", "Illustrator")}
                  </ul>
                </div>
              </div>
              <div id="tech-fe-column">
                <div id="tech-fe-l-column" className="tech-column">
                  <div className="tech-title-container">
                    <i className="fas fa-desktop tech-icons"></i>
                    <div>
                      <h4>FRONT-END</h4>
                    </div>
                  </div>
                  <div className="labels-container">
                    <ul className="labels-list">
                      {techSelectConstructor("html", "HTML")}
                      {techSelectConstructor("css", "CSS")}
                      {techSelectConstructor("sass", "Sass")}
                      {techSelectConstructor("bootstrap", "Bootstrap")}
                      {techSelectConstructor("javascript", "JavaScript")}
                    </ul>
                  </div>
                </div>
                <div id="tech-fe-r-column" className="tech-column">
                  <div className="tech-title-container">
                    <div>
                      <h4>FRONT-END</h4>
                    </div>
                  </div>
                  <div className="labels-container">
                    <ul className="labels-list">
                      {techSelectConstructor("jquery", "jQuery")}
                      {techSelectConstructor("react", "React JS")}
                      {techSelectConstructor("redux", "Redux")}
                      {techSelectConstructor("d3", "D3 JS")}
                      {techSelectConstructor("wordpress", "Wordpress")}
                    </ul>
                  </div>
                </div>
              </div>
              <div id="tech-be-column" className="tech-column">
                <div className="tech-title-container">
                  <i className="fas fa-code tech-icons"></i>
                  <div>
                    <h4>BACK-END</h4>
                  </div>
                </div>
                <div className="labels-container">
                  <ul className="labels-list">
                    {techSelectConstructor("node", "Node JS")}
                    {techSelectConstructor("php", "PHP")}
                    {techSelectConstructor("sql", "SQL")}
                    {techSelectConstructor("mongodb", "MongoDB")}
                    {techSelectConstructor("express", "Express")}
                  </ul>
                </div>
              </div>
              <div id="tech-other-column" className="tech-column">
                <div className="tech-title-container">
                  <i className="fas fa-cogs tech-icons"></i>
                  <div>
                    <h4>OTHER</h4>
                  </div>
                </div>
                <div className="labels-container">
                  <ul className="labels-list">
                    {techSelectConstructor("eslint", "ESLint")}
                    {techSelectConstructor("jest", "JEST")}
                    {techSelectConstructor("git", "GIT")}
                  </ul>
                </div>
              </div>
            </div>
            <div
              onClick={handleClearSelectionClick}
              id="clear-selection-button"
            >
              Clear selection
            </div>
          </div>
          <div id="projects-grid">
            <div id="project0" className="project">
              <img
                className="project-image"
                alt="project 0"
                src={require("./img/project0.png")}
              />
              {techCreator(0)}
            </div>
            <div id="project1" className="project">
              <img
                className="project-image"
                alt="project 1"
                src={require("./img/project1.jpg")}
              />
              {techCreator(1)}
            </div>
            <div id="project2" className="project">
              <img
                className="project-image"
                alt="project 2"
                src={require("./img/project2.jpg")}
              />
              {techCreator(2)}
            </div>
            <div id="project3" className="project">
              <img
                className="project-image"
                alt="project 3"
                src={require("./img/project3.jpg")}
              />
              {techCreator(3)}
            </div>
          </div>
        </div>
      </div>

      <div id="contact-container" ref={myRefContact}>
        <div id="contact">
          <div id="contact-text" align="center">
            <h2 id="contact-title">Contact</h2>
            <p className="contact-form-gsap">
              Any questions before we <b>start</b>?
            </p>
          </div>
          <div id="contact-form">
            <form
              action="https://usebasin.com/f/e981dacb641c"
              method="POST"
              id="form"
            >
              <label for="name"></label>
              <input
                class="contact-form-gsap"
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              ></input>
              <br></br>
              <label for="email-address"></label>
              <input
                class="contact-form-gsap"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              ></input>
              <br></br>
              <label for="message"></label>
              <input
                class="contact-form-gsap"
                type="text"
                id="message"
                name="message"
                placeholder="Message"
                required
              ></input>
              <br></br>
              <button type="submit" id="submit-button">
                Send
              </button>
            </form>
          </div>

          <footer>
            <div id="social-footer">
              <a
                href="https://www.linkedin.com/in/jonathanrace1/"
                target="_blank"
              >
                <i class="fab fa-linkedin-in social-media-icons"></i>
              </a>
              <a href="https://www.hackerrank.com/racy1" target="_blank">
                <i class="fab fa-hackerrank social-media-icons"></i>
              </a>
              <a href="https://codepen.io/jonathan-race" target="_blank">
                <i class="fab fa-codepen social-media-icons"></i>
              </a>
              <a href="https://github.com/jonathanrace77" target="_blank">
                <i class="fab fa-github social-media-icons"></i>
              </a>
            </div>
            <div id="copyright">
              <p>
                Jonathan Race <span>©2020</span>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
