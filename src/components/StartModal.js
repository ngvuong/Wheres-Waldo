import React, { useRef } from "react";
import styled from "styled-components";

function StartModal() {
  const overlayRef = useRef();
  const modalRef = useRef();

  const onClick = () => {
    overlayRef.current.style.display = "none";
    modalRef.current.style.display = "none";
  };

  return (
    <StyledOverlay ref={overlayRef}>
      <StyledModal ref={modalRef}>
        <h2>Find these characters as fast as possible</h2>
        <button onClick={onClick}>Start</button>
      </StyledModal>
    </StyledOverlay>
  );
}

export default StartModal;

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 30vw;
  height: 50vh;
  background-color: ${({ theme }) => theme.colors.modal};
`;

const StyledOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.overlay};
  z-index: 1;
`;
