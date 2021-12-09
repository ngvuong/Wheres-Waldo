import styled from "styled-components";

function Menu({ mousePosition }) {
  return (
    <StyledMenu position={mousePosition}>
      <ul>
        <li>Jerry</li>
        <li>Johny</li>
        <li>Groot</li>
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
  }
`;

export default Menu;
