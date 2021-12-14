import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Timer({ startTimer, getTime }) {
  const [counter, setCounter] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (startTimer) {
        setCounter((counter) => {
          const newCount = counter + 1;
          setSeconds(newCount % 60);

          if (minutes !== Math.floor(newCount / 60)) {
            setMinutes(minutes + 1);
          }
          return newCount;
        });
      } else {
        if (counter > 0) {
          setCounter(0);
          setSeconds(0);
          setMinutes(0);
          getTime(counter);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [counter, seconds, minutes, startTimer, getTime]);

  return (
    <StyledTimer>
      {String(minutes).length < 2 ? "0" + minutes : minutes}:
      {String(seconds).length < 2 ? "0" + seconds : seconds}
    </StyledTimer>
  );
}

const StyledTimer = styled.div`
  font-size: 2rem;
`;

export default Timer;
