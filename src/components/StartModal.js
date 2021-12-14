import React from "react";
import { Overlay } from "./styles/Overlay";
import { StyledModal } from "./styles/Modal.styled";

function StartModal({ onClick }) {
  return (
    <Overlay>
      <StyledModal>
        <h2>Find these characters as fast as possible</h2>
        <button onClick={onClick}>Start</button>
      </StyledModal>
    </Overlay>
  );
}

export default StartModal;
