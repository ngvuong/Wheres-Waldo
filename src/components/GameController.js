import React, { useState, useEffect, useRef } from "react";
import { Container } from "./styles/Container";
import TargetBox from "./TargetBox";
import Menu from "./Menu";
import image from "../assets/113.jpg";

function GameController() {
  const [mousePosition, setMousePosition] = useState([]);
  const [showTarget, setShowTarget] = useState(false);
  const imageRef = useRef();

  const johnnyPositionX = document.body.scrollWidth * 0.392;
  const johnnyPositionY = document.body.scrollHeight * 0.388;

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

  useEffect(() => {
    const targetBoxWidth = window.innerWidth * 0.05;
    const isWithinX =
      johnnyPositionX >= mousePosition[0] - targetBoxWidth / 2 &&
      johnnyPositionX <= mousePosition[0] + targetBoxWidth / 2;

    const isWithinY =
      johnnyPositionY >= mousePosition[1] - targetBoxWidth / 2 &&
      johnnyPositionY <= mousePosition[1] + targetBoxWidth / 2;
    console.log(isWithinX && isWithinY);
  }, [mousePosition, johnnyPositionX, johnnyPositionY]);

  return (
    <Container>
      <img src={image} alt="Universe 113" ref={imageRef} />
      {showTarget && <TargetBox mousePosition={mousePosition} />}
      {showTarget && <Menu mousePosition={mousePosition} />}
    </Container>
  );
}

export default GameController;
