import React, { useEffect } from "react";
import "./css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline(); // timeline

var images = {
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
  git: require("./img/git.png"),
  jonathan: require("./img/jonathan-profile-pic.jpg"),
  pdf: require("./img/pdf-logo.png"),
};

function App() {
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
    gsap.from(".tech-column", { duration: 0.5, y: -50, opacity: 0 });
    gsap.to(".tech-column", {
      duration: 0.3,
      y: 0,
      opacity: 1,
      ease: "back.out(1.7)",
    });
  };
  const boxVisibility = isBoxOpen ? "grid" : "none";
  const allArrowDirection = isBoxOpen ? "rotate(180deg)" : "rotate(0deg)";

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

    tl.to(".about-skill-bar-fill-design", {
      scrollTrigger: {
        trigger: "#design-about-skill-box",
        start: "top bottom",
        end: "center center",
        //markers: true,
        scrub: true,
      },
      width: "100%",
    });

    tl.to(".about-skill-bar-fill-front-end", {
      scrollTrigger: {
        trigger: "#front-end-about-skill-box",
        start: "top bottom",
        end: "center center",
        //markers: true,
        scrub: true,
      },
      width: "100%",
    });
  });

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

  return (
    <div className="App">
      <div className="hero-container"></div>
      <div className="about-container">
        <h2>About</h2>
        <div className="about-jonathan-box">
          <div className="corner1 about-corner"></div>
          <div className="corner2 about-corner"></div>
          <div className="corner3 about-corner"></div>
          <div className="corner4 about-corner"></div>
          <div className="corner5 about-corner"></div>
          <div className="corner6 about-corner"></div>
          <div className="corner7 about-corner"></div>
          <div className="corner8 about-corner"></div>
          <div className="about-jonathan-box-left">
            <div className="jonathan-pic-container">
              <img alt="jonathan profile pic" src={images.jonathan}></img>
            </div>
            <div className="cv-download-container">
              <div>
                <img alt="jonathan cv download button" src={images.pdf}></img>
              </div>
              <div>
                <a>Download my cv</a>
              </div>
            </div>
          </div>
          <div className="about-jonathan-box-right">
            <h3>Jonathan Race</h3>
            <h4>Front-End Web Developer</h4>
            <p>
              I've been working on web design for years now and I love the
              combination of problem-solving and creativity, it fuels my passion
              for each and every project, and I love learning new things every
              step of the way.
            </p>
            <p>
              {" "}
              I would love to work with you on your project. I build websites
              that are responsive, fast and designed to enhance the user's
              journey in any way possible. Let me know your ideas you already
              have when you contact, we can use that as a foundation and from
              there, <b>the sky is the limit!</b>
            </p>
          </div>
        </div>

        <div id="design-about-skill-box" className="about-skill-box">
          <div className="about-skill-container">
            <div className="about-skill-bar">
              <div
                id="photoshop-bar"
                className="about-skill-bar-fill about-skill-bar-fill-design"
              ></div>
            </div>
            <div className="about-logo-bar-container">
              <div className="about-skill-logo">
                <img alt="tech photoshop" src={images.photoshop}></img>
                <div className="about-skill-title">Photoshop</div>
              </div>
            </div>
            <div className="about-skill-level">Experienced</div>
          </div>

          <div className="about-skill-container">
            <div className="about-skill-bar">
              <div
                id="sketch-bar"
                className="about-skill-bar-fill about-skill-bar-fill-design"
              ></div>
            </div>
            <div className="about-logo-bar-container">
              <div className="about-skill-logo">
                <img alt="tech sketch" src={images.sketch}></img>
                <div className="about-skill-title">Sketch</div>
              </div>
            </div>
            <div className="about-skill-level">Experienced</div>
          </div>

          <div className="about-skill-container">
            <div className="about-skill-bar">
              <div
                id="illustrator-bar"
                className="about-skill-bar-fill about-skill-bar-fill-design"
              ></div>
            </div>
            <div className="about-logo-bar-container">
              <div className="about-skill-logo">
                <img alt="tech illustrator" src={images.illustrator}></img>
                <div className="about-skill-title">Illustrator</div>
              </div>
            </div>
            <div className="about-skill-level">Familiar</div>
          </div>
        </div>

        <div id="front-end-about-skill-box" className="about-skill-box">
          <div className="about-skill-container">
            <div className="about-skill-bar">
              <div
                id="html-bar"
                className="about-skill-bar-fill about-skill-bar-fill-front-end"
              ></div>
            </div>
            <div className="about-logo-bar-container">
              <div className="about-skill-logo">
                <img alt="tech html" src={images.html}></img>
                <div className="about-skill-title">HTML</div>
              </div>
            </div>
            <div className="about-skill-level">Experienced</div>
          </div>

          <div className="about-skill-container">
            <div className="about-skill-bar">
              <div
                id="css-bar"
                className="about-skill-bar-fill about-skill-bar-fill-front-end"
              ></div>
            </div>
            <div className="about-logo-bar-container">
              <div className="about-skill-logo">
                <img alt="tech css" src={images.css}></img>
                <div className="about-skill-title">CSS</div>
              </div>
            </div>
            <div className="about-skill-level">Experienced</div>
          </div>

          <div className="about-skill-container">
            <div className="about-skill-bar">
              <div
                id="sass-bar"
                className="about-skill-bar-fill about-skill-bar-fill-front-end"
              ></div>
            </div>
            <div className="about-logo-bar-container">
              <div className="about-skill-logo">
                <img alt="tech sass" src={images.sass}></img>
                <div className="about-skill-title">Sass</div>
              </div>
            </div>
            <div className="about-skill-level">Proficient</div>
          </div>
        </div>

        <div id="back-end-about-skill-box" className="about-skill-box">
          <div className="about-skill-container">
            <div className="about-skill-bar">
              <div
                id="sass-bar"
                className="about-skill-bar-fill about-skill-bar-fill-front-end"
              ></div>
            </div>
            <div className="about-logo-bar-container">
              <div className="about-skill-logo">
                <img alt="tech sass" src={images.sass}></img>
                <div className="about-skill-title">Sass</div>
              </div>
            </div>

            <div className="about-skill-level">Proficient</div>
          </div>
          <div className="about-skill-container">
            <div className="about-skill-bar">
              <div
                id="sass-bar"
                className="about-skill-bar-fill about-skill-bar-fill-front-end"
              ></div>
            </div>
            <div className="about-logo-bar-container">
              <div className="about-skill-logo">
                <img alt="tech sass" src={images.sass}></img>
                <div className="about-skill-title">Sass</div>
              </div>
            </div>

            <div className="about-skill-level">Proficient</div>
          </div>
          <div className="about-skill-container">
            <div className="about-skill-bar">
              <div
                id="sass-bar"
                className="about-skill-bar-fill about-skill-bar-fill-front-end"
              ></div>
            </div>
            <div className="about-logo-bar-container">
              <div className="about-skill-logo">
                <img alt="tech sass" src={images.sass}></img>
                <div className="about-skill-title">Sass</div>
              </div>
            </div>
            <div className="about-skill-level">Proficient</div>
          </div>
        </div>

        <div id="other-skill-box" className="about-skill-box">
          <div className="about-skill-container">
            <div className="about-skill-bar">
              <div
                id="sass-bar"
                className="about-skill-bar-fill about-skill-bar-fill-front-end"
              ></div>
            </div>
            <div className="about-logo-bar-container">
              <div className="about-skill-logo">
                <img alt="tech sass" src={images.sass}></img>
                <div className="about-skill-title">Sass</div>
              </div>
            </div>
            <div className="about-skill-level">Proficient</div>
          </div>

          <div className="about-skill-container">
            <div className="about-skill-bar">
              <div
                id="sass-bar"
                className="about-skill-bar-fill about-skill-bar-fill-front-end"
              ></div>
            </div>
            <div className="about-logo-bar-container">
              <div className="about-skill-logo">
                <img alt="tech sass" src={images.sass}></img>
                <div className="about-skill-title">Sass</div>
              </div>
            </div>
            <div className="about-skill-level">Proficient</div>
          </div>

          <div className="about-skill-container">
            <div className="about-skill-bar">
              <div
                id="sass-bar"
                className="about-skill-bar-fill about-skill-bar-fill-front-end"
              ></div>
            </div>
            <div className="about-logo-bar-container">
              <div className="about-skill-logo">
                <img alt="tech sass" src={images.sass}></img>
                <div className="about-skill-title">Sass</div>
              </div>
            </div>
            <div className="about-skill-level">Proficient</div>
          </div>
        </div>
      </div>

      <div className="projects-container">
        <div className="projects-layer">
          <h2>Projects</h2>
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
                    <li>
                      <div className="check-container">
                        <div id="sketch-check-label" className="check-label">
                          Sketch
                        </div>
                        <div
                          onClick={(e) => handleCheckBoxClick(e.currentTarget)}
                          id="sketch"
                          className="check-box check-box-checked"
                        >
                          <i className="fas fa-check"></i>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="check-container">
                        <div id="photoshop-check-label" className="check-label">
                          Photoshop
                        </div>
                        <div
                          onClick={(e) => handleCheckBoxClick(e.currentTarget)}
                          id="photoshop"
                          className="check-box check-box-checked"
                        >
                          <i className="fas fa-check"></i>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="check-container">
                        <div
                          id="illustrator-check-label"
                          className="check-label"
                        >
                          Illustrator
                        </div>
                        <div
                          onClick={(e) => handleCheckBoxClick(e.currentTarget)}
                          id="illustrator"
                          className="check-box check-box-checked"
                        >
                          <i className="fas fa-check"></i>
                        </div>
                      </div>
                    </li>
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
                      <li>
                        <div className="check-container">
                          <div id="html-check-label" className="check-label">
                            HTML5
                          </div>
                          <div
                            onClick={(e) =>
                              handleCheckBoxClick(e.currentTarget)
                            }
                            id="html"
                            className="check-box check-box-checked"
                          >
                            <i className="fas fa-check"></i>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="check-container">
                          <div id="css-check-label" className="check-label">
                            CSS3
                          </div>
                          <div
                            onClick={(e) =>
                              handleCheckBoxClick(e.currentTarget)
                            }
                            id="css"
                            className="check-box check-box-checked"
                          >
                            <i className="fas fa-check"></i>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="check-container">
                          <div id="sass-check-label" className="check-label">
                            Sass
                          </div>
                          <div
                            onClick={(e) =>
                              handleCheckBoxClick(e.currentTarget)
                            }
                            id="sass"
                            className="check-box check-box-checked"
                          >
                            <i className="fas fa-check"></i>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="check-container">
                          <div
                            id="bootstrap-check-label"
                            className="check-label"
                          >
                            Bootstrap
                          </div>
                          <div
                            onClick={(e) =>
                              handleCheckBoxClick(e.currentTarget)
                            }
                            id="bootstrap"
                            className="check-box check-box-checked"
                          >
                            <i className="fas fa-check"></i>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="check-container">
                          <div
                            id="javascript-check-label"
                            className="check-label"
                          >
                            JavaScript
                          </div>
                          <div
                            onClick={(e) =>
                              handleCheckBoxClick(e.currentTarget)
                            }
                            id="javascript"
                            className="check-box check-box-checked"
                          >
                            <i className="fas fa-check"></i>
                          </div>
                        </div>
                      </li>
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
                      <li>
                        <div className="check-container">
                          <div id="jquery-check-label" className="check-label">
                            jQuery
                          </div>
                          <div
                            onClick={(e) =>
                              handleCheckBoxClick(e.currentTarget)
                            }
                            id="jquery"
                            className="check-box check-box-checked"
                          >
                            <i className="fas fa-check"></i>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="check-container">
                          <div id="react-check-label" className="check-label">
                            React JS
                          </div>
                          <div
                            onClick={(e) =>
                              handleCheckBoxClick(e.currentTarget)
                            }
                            id="react"
                            className="check-box check-box-checked"
                          >
                            <i className="fas fa-check"></i>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="check-container">
                          <div id="redux-check-label" className="check-label">
                            Redux
                          </div>
                          <div
                            onClick={(e) =>
                              handleCheckBoxClick(e.currentTarget)
                            }
                            id="redux"
                            className="check-box check-box-checked"
                          >
                            <i className="fas fa-check"></i>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="check-container">
                          <div id="d3-check-label" className="check-label">
                            D3 JS
                          </div>
                          <div
                            onClick={(e) =>
                              handleCheckBoxClick(e.currentTarget)
                            }
                            id="d3"
                            className="check-box check-box-checked"
                          >
                            <i className="fas fa-check"></i>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="check-container">
                          <div
                            id="wordpress-check-label"
                            className="check-label"
                          >
                            Wordpress
                          </div>
                          <div
                            onClick={(e) =>
                              handleCheckBoxClick(e.currentTarget)
                            }
                            id="wordpress"
                            className="check-box check-box-checked"
                          >
                            <i className="fas fa-check"></i>
                          </div>
                        </div>
                      </li>
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
                    <li>
                      <div className="check-container">
                        <div id="node-check-label" className="check-label">
                          Node JS
                        </div>
                        <div
                          onClick={(e) => handleCheckBoxClick(e.currentTarget)}
                          id="node"
                          className="check-box check-box-checked"
                        >
                          <i className="fas fa-check"></i>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="check-container">
                        <div id="php-check-label" className="check-label">
                          PHP
                        </div>
                        <div
                          onClick={(e) => handleCheckBoxClick(e.currentTarget)}
                          id="php"
                          className="check-box check-box-checked"
                        >
                          <i className="fas fa-check"></i>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="check-container">
                        <div id="sql-check-label" className="check-label">
                          SQL
                        </div>
                        <div
                          onClick={(e) => handleCheckBoxClick(e.currentTarget)}
                          id="sql"
                          className="check-box check-box-checked"
                        >
                          <i className="fas fa-check"></i>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="check-container">
                        <div id="mongodb-check-label" className="check-label">
                          MongoDB
                        </div>
                        <div
                          onClick={(e) => handleCheckBoxClick(e.currentTarget)}
                          id="mongodb"
                          className="check-box check-box-checked"
                        >
                          <i className="fas fa-check"></i>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="check-container">
                        <div id="express-check-label" className="check-label">
                          Express
                        </div>
                        <div
                          onClick={(e) => handleCheckBoxClick(e.currentTarget)}
                          id="express"
                          className="check-box check-box-checked"
                        >
                          <i className="fas fa-check"></i>
                        </div>
                      </div>
                    </li>
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
                    <li>
                      <div className="check-container">
                        <div id="eslint-check-label" className="check-label">
                          ESLint
                        </div>
                        <div
                          onClick={(e) => handleCheckBoxClick(e.currentTarget)}
                          id="eslint"
                          className="check-box check-box-checked"
                        >
                          <i className="fas fa-check"></i>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="check-container">
                        <div id="jest-check-label" className="check-label">
                          JEST
                        </div>
                        <div
                          onClick={(e) => handleCheckBoxClick(e.currentTarget)}
                          id="jest"
                          className="check-box check-box-checked"
                        >
                          <i className="fas fa-check"></i>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="check-container">
                        <div id="git-check-label" className="check-label">
                          GIT
                        </div>
                        <div
                          onClick={(e) => handleCheckBoxClick(e.currentTarget)}
                          id="git"
                          className="check-box check-box-checked"
                        >
                          <i className="fas fa-check"></i>
                        </div>
                      </div>
                    </li>
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
                src={require("./img/project1.png")}
              />
              {techCreator(1)}
            </div>
            <div id="project2" className="project">
              <img
                className="project-image"
                alt="project 2"
                src={require("./img/project2.png")}
              />
              {techCreator(2)}
            </div>
            <div id="project3" className="project">
              <img
                className="project-image"
                alt="project 3"
                src={require("./img/project3.png")}
              />
              {techCreator(3)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
