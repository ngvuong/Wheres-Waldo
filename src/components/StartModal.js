import React from "react";
import styled from "styled-components";
import { Overlay } from "./styles/Overlay";

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

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 30vw;
  height: 50vh;
  background-color: ${({ theme }) => theme.colors.modal};
`;

export default StartModal;
