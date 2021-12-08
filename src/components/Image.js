import { useState, useEffect, useRef } from "react";
import image from "../assets/113.jpg";

function Image() {
  const [mousePosition, setMousePosition] = useState([]);
  const imageRef = useRef();

  useEffect(() => {
    const image = imageRef.current;
    const getMousePosition = (e) => {
      if (e.shiftKey) {
        const left = image.getBoundingClientRect();
        console.log(left);
        setMousePosition([e.offsetX, e.offsetY]);
      }
    };
    image.addEventListener("click", getMousePosition);
    return () => image.removeEventListener("click", getMousePosition);
  }, [mousePosition]);

  return <img src={image} alt="Universe 113" ref={imageRef} />;
}

export default Image;
