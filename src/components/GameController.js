import React, { useState, useEffect, useRef } from "react";
import { Container } from "./styles/Container";
import TargetBox from "./TargetBox";
import Menu from "./Menu";
import PopUp from "./PopUp";
import image from "../assets/113.jpg";

function GameController({ options, onOptionsChange }) {
  const [mousePosition, setMousePosition] = useState([]);
  const [showTarget, setShowTarget] = useState(false);
  const [target, setTarget] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState("");
  const imageRef = useRef();
  // Get mouse position relative to page
  useEffect(() => {
    const image = imageRef.current;
    const getMousePosition = (e) => {
      if (!showTarget) {
        setMousePosition([e.pageX, e.pageY]);
      }
      setShowTarget(!showTarget);
    };
    image.addEventListener("click", getMousePosition);
    return () => image.removeEventListener("click", getMousePosition);
  }, [mousePosition, showTarget]);
  // Set up character positions based on relative page positioning
  useEffect(() => {
    const bodyWidth = document.body.scrollWidth;
    const bodyHeight = document.body.scrollHeight;

    const jerryX = bodyWidth * 0.556;
    const jerryY = bodyHeight * 0.682;
    const johnnyX = bodyWidth * 0.392;
    const johnnyY = bodyHeight * 0.388;
    const grootX = bodyWidth * 0.594;
    const grootY = bodyHeight * 0.738;

    const targetBoxWidth = window.innerWidth * 0.05;
    // Check to see if character is in target box
    const isWithinTarget = (x, y) => {
      return (
        x >= mousePosition[0] - targetBoxWidth / 2 &&
        x <= mousePosition[0] + targetBoxWidth / 2 &&
        y >= mousePosition[1] - targetBoxWidth / 2 &&
        y <= mousePosition[1] + targetBoxWidth / 2
      );
    };

    if (isWithinTarget(jerryX, jerryY)) {
      setTarget("Jerry");
    } else if (isWithinTarget(johnnyX, johnnyY)) {
      setTarget("Johnny");
    } else if (isWithinTarget(grootX, grootY)) {
      setTarget("Groot");
    } else setTarget("");
  }, [mousePosition]);
  // Pop up for feedback
  const onMenuClick = (character) => {
    setShowPopUp(true);
    setTimeout(() => {
      setShowPopUp(false);
    }, 1000);

    setShowTarget(!showTarget);

    if (target === character) {
      setPopUpMessage(`Here's ${character}!`);
      onOptionsChange(character);
    } else setPopUpMessage(`That's not ${character}`);
  };

  return (
    <Container>
      <img src={image} alt="Universe 113" ref={imageRef} />
      {showTarget && <TargetBox mousePosition={mousePosition} />}
      {showTarget && (
        <Menu
          mousePosition={mousePosition}
          onClick={onMenuClick}
          options={options}
        />
      )}
      {showPopUp && <PopUp message={popUpMessage} />}
    </Container>
  );
}

export default GameController;
