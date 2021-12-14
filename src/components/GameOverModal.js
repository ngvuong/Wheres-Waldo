import React, { useRef } from "react";
import { Overlay } from "./styles/Overlay";
import { StyledModal } from "./styles/Modal.styled";

function GameOverModal({ onRestart, time }) {
  const overlayRef = useRef();

  const onClick = () => {
    // overlayRef.current.style.display = "none";
    onRestart();
  };

  const minutes = String(Math.floor(time / 60));
  const seconds = String(time % 60);

  return (
    <Overlay ref={overlayRef}>
      <StyledModal>
        <h2>Congratulations!</h2>
        <h3>Submit your time below or play again</h3>
        {time !== 0
          ? `${minutes.length < 2 ? "0" + minutes : minutes}:${
              seconds.length < 2 ? "0" + seconds : seconds
            }`
          : "..."}
        <input type="text" maxLength="3" />
        <button>Submit</button>
        <button onClick={onClick}>Play Again</button>
      </StyledModal>
    </Overlay>
  );
}

export default GameOverModal;
