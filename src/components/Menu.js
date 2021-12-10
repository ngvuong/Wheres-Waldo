import React from "react";
import styled from "styled-components";

function Menu({ mousePosition, onClick, options }) {
  const listItems = options.map((option) => {
    return (
      <li key={option} onClick={() => onClick(option)}>
        {option}
      </li>
    );
  });
  return (
    <StyledMenu position={mousePosition}>
      <ul>{listItems}</ul>
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
