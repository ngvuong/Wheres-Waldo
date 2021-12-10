import React from "react";
import { StyledHeader } from "./styles/Header.styled";
import Thumbnail from "./Thumbnail";
import jerry from "../assets/jerry.webp";
import johnny from "../assets/johnny.webp";
import groot from "../assets/groot.webp";

function Header() {
  return (
    <StyledHeader>
      <h1>Where's Johnny</h1>
      <Thumbnail src={jerry} character={"Jerry"} />
      <Thumbnail src={johnny} character={"Johnny"} />
      <Thumbnail src={groot} character={"Groot"} />
    </StyledHeader>
  );
}

export default Header;
