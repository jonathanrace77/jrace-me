import React, { useState, useEffect } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [isBoxOpen, setIsBoxOpen] = React.useState(1);
  const [isSelectedBox, setIsSelectedBox] = React.useState({
    blank: 0,
    sketch: 1,
    photoshop: 1,
    illustrator: 1,
  });
  const [projectTechList, SetProjectTechList] = React.useState([
    ["sketch", "blank", "blank", "blank", "blank", "blank", "blank"],
    ["photoshop", "blank", "blank", "blank", "blank", "blank", "blank"],
    ["photoshop", "illustrator", "blank", "blank", "blank", "blank", "blank"],
  ]);
  const handleAllClick = () => setIsBoxOpen(Math.abs(isBoxOpen - 1));
  const boxVisibility = isBoxOpen ? "grid" : "none";

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

  // Loop through the project tech array and if any of them are selected (in the selectBox object) then show the element
  const updateProjectSelection = () => {
    for (let i = 0; i < 3; i++) {
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
    setIsSelectedBox({ sketch: 0, photoshop: 0, illustrator: 0 });

    // Get desired elements
    var element = document.getElementsByClassName("check-box");

    // Iterate through the retrieved elements and add the necessary class names.
    for (var i = 0; i < element.length; i++) {
      element[i].classList.add("check-box-unchecked");
      element[i].classList.remove("check-box-checked");
    }
  };

  return (
    <div className="App">
      <h2>Projects</h2>
      <div onClick={handleAllClick} id="tech-select-open-button">
        All
      </div>
      <div id="tech-select-container" style={{ display: boxVisibility }}>
        <div id="tech-select-grid">
          <div id="tech-design-column" className="tech-column">
            <div class="tech-title-container">
              <i className="fas fa-paint-brush tech-icons"></i>
              <div>
                <h4>DESIGN</h4>
              </div>
            </div>
            <div class="labels-container">
              <ul class="labels-list">
                <li>
                  <div class="check-container">
                    <div id="sketch-check-label" class="check-label">
                      Sketch
                    </div>
                    <div
                      onClick={(e) => handleCheckBoxClick(e.currentTarget)}
                      id="sketch"
                      class="check-box check-box-checked"
                    >
                      <i class="fas fa-check"></i>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="check-container">
                    <div id="photoshop-check-label" class="check-label">
                      Photoshop
                    </div>
                    <div
                      onClick={(e) => handleCheckBoxClick(e.currentTarget)}
                      id="photoshop"
                      class="check-box check-box-checked"
                    >
                      <i class="fas fa-check"></i>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="check-container">
                    <div id="illustrator-check-label" class="check-label">
                      Illustrator
                    </div>
                    <div
                      onClick={(e) => handleCheckBoxClick(e.currentTarget)}
                      id="illustrator"
                      class="check-box check-box-checked"
                    >
                      <i class="fas fa-check"></i>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div id="tech-fe-column">
            <div id="tech-fe-l-column" className="tech-column"></div>
            <div id="tech-fe-r-column" className="tech-column"></div>
          </div>
          <div id="tech-be-column" className="tech-column"></div>
          <div id="tech-other-column" className="tech-column"></div>
        </div>
        <div onClick={handleClearSelectionClick} id="clear-selection-button">
          Clear selection
        </div>
      </div>
      <div id="project0">Project a (uses just sketch)</div>
      <div id="project1">Project b (uses just photoshop)</div>
      <div id="project2">Project c (uses photoshop and illustrator)</div>
    </div>
  );
}

export default App;
