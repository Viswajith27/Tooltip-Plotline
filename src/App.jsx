import React, { useState } from "react";
import "./App.css";

function App() {
  const buttons = [
    "Top Left",
    "Top Right",
    "Center",
    "Bottom Left",
    "Bottom Right",
  ];

  const [selectedButton, setSelectedButton] = useState(buttons[0]);

  const [buttonStyles, setButtonStyles] = useState({
    "Top Left": {
      color: "#000",
      backgroundColor: "#f0f0f0",
      borderRadius: "4px",
      fontSize: "16px",
      padding: "10px",
    },
    "Top Right": {
      color: "#000",
      backgroundColor: "#f0f0f0",
      borderRadius: "4px",
      fontSize: "16px",
      padding: "10px",
    },
    Center: {
      color: "#000",
      backgroundColor: "#f0f0f0",
      borderRadius: "4px",
      fontSize: "16px",
      padding: "10px",
    },
    "Bottom Left": {
      color: "#000",
      backgroundColor: "#f0f0f0",
      borderRadius: "4px",
      fontSize: "16px",
      padding: "10px",
    },
    "Bottom Right": {
      color: "#000",
      backgroundColor: "#f0f0f0",
      borderRadius: "4px",
      fontSize: "16px",
      padding: "10px",
    },
  });

  const [tooltipText, setTooltipText] = useState("Default Tooltip Text");
  const [tooltipWidth, setTooltipWidth] = useState("max-content");
  const [tooltipArrowWidth, setTooltipArrowWidth] = useState("8px");
  const [tooltipArrowHeight, setTooltipArrowHeight] = useState("8px");

  const [tooltipPosition, setTooltipPosition] = useState({
    left: "50%",
    bottom: "calc(100% + 10px)",
  });

  const handleDropdownChange = (event) => {
    setSelectedButton(event.target.value);
  };

  const handleStyleChange = (styleName, value) => {
    setButtonStyles((prevStyles) => ({
      ...prevStyles,
      [selectedButton]: {
        ...prevStyles[selectedButton],
        [styleName]: value,
      },
    }));
  };

  const handleTooltipPosition = (buttonLabel) => {
    const buttonIndex = buttons.indexOf(buttonLabel);
    let newPosition = { ...tooltipPosition };

    if (buttonIndex === 0) {
      newPosition = {
        left: "10px",
        bottom: "calc(100% + 10px)",
      };
    } else if (buttonIndex === 1) {
      newPosition = {
        left: "calc(100% - 10px)",
        bottom: "calc(100% + 10px)",
      };
    } else if (buttonIndex === 2) {
      newPosition = {
        left: "50%",
        bottom: "calc(100% + 10px)",
      };
    } else if (buttonIndex === 3) {
      newPosition = {
        left: "10px",
        bottom: "calc(100% + 10px)",
      };
    } else if (buttonIndex === 4) {
      newPosition = {
        left: "calc(100% - 10px)",
        bottom: "calc(100% + 10px)",
      };
    }

    setTooltipPosition(newPosition);
  };

  const handleTooltipReset = () => {
    setTooltipPosition({
      left: "50%",
      bottom: "calc(100% + 10px)",
    });
  };

  return (
    <div className="app">
      <div className="left-side">
        <div className="phone">
          <div className="screen">
            {buttons.map((buttonLabel, index) => (
              <div
                className="tooltip-container"
                key={index}
                onMouseEnter={() => handleTooltipPosition(buttonLabel)}
                onMouseLeave={handleTooltipReset}
              >
                <button
                  className={`tooltip-button button-${buttonLabel
                    .split(" ")
                    .join("-")
                    .toLowerCase()}`}
                  selected={selectedButton === buttonLabel}
                  style={{
                    color: buttonStyles[buttonLabel].color,
                    backgroundColor: buttonStyles[buttonLabel].backgroundColor,
                    borderRadius: buttonStyles[buttonLabel].borderRadius,
                    fontSize: buttonStyles[buttonLabel].fontSize,
                    padding: buttonStyles[buttonLabel].padding,
                  }}
                >
                  {buttonLabel}
                </button>
                <div
                  className="tooltip"
                  style={{
                    left: tooltipPosition.left,
                    bottom: tooltipPosition.bottom,
                    width: tooltipWidth,
                  }}
                >
                  <div
                    className="tooltip-arrow"
                    style={{
                      width: tooltipArrowWidth,
                      height: tooltipArrowHeight,
                    }}
                  ></div>
                  {tooltipText}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="dropdown-container">
          <label htmlFor="targetElement">Target Element:</label>
          <select
            id="targetElement"
            value={selectedButton}
            onChange={handleDropdownChange}
          >
            {buttons.map((buttonLabel, index) => (
              <option key={index} value={buttonLabel}>
                {buttonLabel}
              </option>
            ))}
          </select>
        </div>
        <div className="form-container">
          <h3>Edit Button Styles</h3>
          <label htmlFor="color">Text Color:</label>
          <input
            type="color"
            id="color"
            value={buttonStyles[selectedButton].color}
            onChange={(e) => handleStyleChange("color", e.target.value)}
          />
          <label htmlFor="backgroundColor">Background Color:</label>
          <input
            type="color"
            id="backgroundColor"
            value={buttonStyles[selectedButton].backgroundColor}
            onChange={(e) =>
              handleStyleChange("backgroundColor", e.target.value)
            }
          />
          <label htmlFor="borderRadius">Border Radius:</label>
          <input
            type="text"
            id="borderRadius"
            value={buttonStyles[selectedButton].borderRadius}
            onChange={(e) => handleStyleChange("borderRadius", e.target.value)}
          />
          <label htmlFor="fontSize">Text Size:</label>
          <input
            type="text"
            id="fontSize"
            value={buttonStyles[selectedButton].fontSize}
            onChange={(e) => handleStyleChange("fontSize", e.target.value)}
          />
          <label htmlFor="padding">Button Padding:</label>
          <input
            type="text"
            id="padding"
            value={buttonStyles[selectedButton].padding}
            onChange={(e) => handleStyleChange("padding", e.target.value)}
          />
          <label htmlFor="tooltipText">Tooltip Text:</label>
          <input
            type="text"
            id="tooltipText"
            value={tooltipText}
            onChange={(e) => setTooltipText(e.target.value)}
          />
          <label htmlFor="tooltipWidth">Tooltip Width:</label>
          <input
            type="text"
            id="tooltipWidth"
            value={tooltipWidth}
            onChange={(e) => setTooltipWidth(e.target.value)}
          />
          <label htmlFor="tooltipArrowWidth">Tooltip Arrow Width:</label>
        <input
          type="text"
          id="tooltipArrowWidth"
          value={tooltipArrowWidth}
          onChange={(e) => setTooltipArrowWidth(e.target.value)}
        />
        <label htmlFor="tooltipArrowHeight">Tooltip Arrow Height:</label>
        <input
          type="text"
          id="tooltipArrowHeight"
          value={tooltipArrowHeight}
          onChange={(e) => setTooltipArrowHeight(e.target.value)}
        />
        </div>
      </div>
    </div>
  );
}

export default App;
