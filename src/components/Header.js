import React from "react";
import { StyledHeader } from "./styles/Header.styled";
import Thumbnail from "./Thumbnail";
import Timer from "./Timer";
import jerry from "../assets/jerry.webp";
import johnny from "../assets/johnny.webp";
import groot from "../assets/groot.webp";

function Header({ startTimer, getTime }) {
  return (
    <StyledHeader>
      <h1>Where's Johnny</h1>
      <div>
        <Thumbnail src={jerry} character={"Jerry"} />
        <Thumbnail src={johnny} character={"Johnny"} />
        <Thumbnail src={groot} character={"Groot"} />
      </div>
      <Timer startTimer={startTimer} getTime={getTime} />
    </StyledHeader>
  );
}

export default Header;
