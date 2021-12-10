import React, { useRef } from "react";
import { Overlay } from "./styles/Overlay";
import { StyledModal } from "./StartModal";

function GameOverModal({ onRestart }) {
  const overlayRef = useRef();

  const onClick = () => {
    // overlayRef.current.style.display = "none";
    onRestart();
  };

  return (
    <Overlay ref={overlayRef}>
      <StyledModal>
        <h2>Congratulations!</h2>
        <button onClick={onClick}>Play Again</button>
      </StyledModal>
    </Overlay>
  );
}

export default GameOverModal;
