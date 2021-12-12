import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Timer() {
  const [time, setTime] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setTime(time + 1);
      setSeconds(time % 60);
      if (minutes !== Math.floor(time / 60)) {
        setMinutes(minutes + 1);
      }
    }, 1000);

    return () => clearTimeout(timeId);
  }, [time, seconds, minutes]);

  return <StyledTimer>{time}</StyledTimer>;
}

const StyledTimer = styled.div``;

export default Timer;
