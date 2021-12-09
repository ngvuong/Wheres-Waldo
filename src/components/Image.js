import React, { useState, useEffect, useRef } from "react";
import { Container } from "./styles/Container";
import image from "../assets/113.jpg";

function Image() {
  const [mousePosition, setMousePosition] = useState([]);
  const [showTarget, setShowTarget] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    const image = imageRef.current;
    const getMousePosition = (e) => {
      if (e.shiftKey) {
        // const left = image.getBoundingClientRect();
        console.log(e.offsetX, image.width * 0.594, e.offsetX / image.width);
        console.log(e.offsetY, image.height * 0.727, e.offsetY / image.height);
        setMousePosition([e.offsetX, e.offsetY]);
        setShowTarget(true);
      } else setShowTarget(false);
    };
    console.log(mousePosition);
    image.addEventListener("click", getMousePosition);
    return () => image.removeEventListener("click", getMousePosition);
  }, [mousePosition]);

  return (
    <Container>
      <img src={image} alt="Universe 113" ref={imageRef} />
      {showTarget && (
        <div
          style={{
            width: "5vw",
            height: "5vw",
            backgroundColor: "black",
            position: "absolute",
            top: `calc(${mousePosition[1]}px - 2.5vw)`,
            left: `calc(${mousePosition[0]}px - 2.5vw)`,
          }}
        ></div>
      )}
    </Container>
  );
}

export default Image;
