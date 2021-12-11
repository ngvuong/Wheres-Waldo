import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Timer() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString().substring(0, 7)
  );

  useEffect(() => {
    const timeId = setTimeout(() => {
      setTime(new Date().toLocaleTimeString().substring(0, 7));
    }, 1000);

    return () => clearTimeout(timeId);
  }, [time]);

  return <StyledTimer>{time}</StyledTimer>;
}

const StyledTimer = styled.div``;

export default Timer;
