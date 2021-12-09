import React, { useRef } from "react";
import styled from "styled-components";

function Menu({ mousePosition, onClick }) {
  const jerryRef = useRef();
  const johnnyRef = useRef();
  const grootRef = useRef();

  return (
    <StyledMenu position={mousePosition}>
      <ul>
        <li
          onClick={() => onClick(jerryRef.current.textContent)}
          ref={jerryRef}
        >
          Jerry
        </li>
        <li
          onClick={() => onClick(johnnyRef.current.textContent)}
          ref={johnnyRef}
        >
          Johnny
        </li>
        <li
          onClick={() => onClick(grootRef.current.textContent)}
          ref={grootRef}
        >
          Groot
        </li>
      </ul>
    </StyledMenu>
  );
}

const StyledMenu = styled.div`
  /* width: 5vmax; */
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: ${({ position }) => `${position[1]}px`};
  left: ${({ position }) => `${position[0]}px`};

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    padding: 0.5rem;
    list-style: none;
    cursor: pointer;
  }
`;

export default Menu;
