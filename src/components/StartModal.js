import React from "react";
import { Overlay } from "./styles/Overlay";
import { StyledModal } from "./styles/Modal.styled";
import jerry from "../assets/jerry.webp";
import johnny from "../assets/johnny.webp";
import groot from "../assets/groot.webp";

function StartModal({ onClick }) {
  return (
    <Overlay>
      <StyledModal>
        <h2>Where's Johnny</h2>
        <span>Find these characters as fast as possible</span>
        <div>
          <img src={jerry} alt="Jerry" draggable="false" />
          <img src={johnny} alt="Johnny" draggable="false" />
          <img src={groot} alt="Groot" draggable="false" />
        </div>
        <button onClick={onClick}>Start</button>
      </StyledModal>
    </Overlay>
  );
}

export default StartModal;
