import React, { useRef } from "react";
import { Overlay } from "./styles/Overlay";
import { StyledModal } from "./styles/Modal.styled";

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
        <h3>Submit your time below or play again</h3>
        <input type="text" maxlength="3" />
        <button>Submit</button>
        <button onClick={onClick}>Play Again</button>
      </StyledModal>
    </Overlay>
  );
}

export default GameOverModal;
