import React from "react";
import { StyledHeader } from "./styles/Header.styled";
import Thumbnail from "./Thumbnail";

function Header() {
  return (
    <StyledHeader>
      <h1>Where's Johnny</h1>
      <Thumbnail character={"Jerry"} />
      <Thumbnail character={"Johnny"} />
      <Thumbnail character={"Groot"} />
    </StyledHeader>
  );
}

export default Header;
