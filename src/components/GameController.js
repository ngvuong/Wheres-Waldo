import React, { useState, useEffect, useRef } from "react";
import { Container } from "./styles/Container";
import TargetBox from "./TargetBox";
import image from "../assets/113.jpg";

function GameController() {
  const [mousePosition, setMousePosition] = useState([]);
  const [showTarget, setShowTarget] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    const image = imageRef.current;
    const getMousePosition = (e) => {
      if (e.shiftKey) {
        setMousePosition([e.pageX, e.pageY]);
        setShowTarget(true);
      } else setShowTarget(false);
    };
    image.addEventListener("click", getMousePosition);
    return () => image.removeEventListener("click", getMousePosition);
  }, [mousePosition]);

  return (
    <Container>
      <img src={image} alt="Universe 113" ref={imageRef} />
      {showTarget && <TargetBox mousePosition={mousePosition} />}
    </Container>
  );
}

export default GameController;
