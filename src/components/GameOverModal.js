import React, { useRef, useState } from "react";
import Leaderboard from "./Leaderboard";
import { Overlay } from "./styles/Overlay";
import { StyledModal } from "./styles/Modal.styled";
import { getFirestore, collection, addDoc } from "firebase/firestore";

function GameOverModal({ onRestart, time }) {
  const [showForm, setShowForm] = useState(true);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const inputRef = useRef();

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    try {
      await addDoc(collection(getFirestore(), "time"), { name, time });
    } catch (error) {
      console.error("Cannot write to Database", error);
    }
    setShowForm(false);
  };

  const onShowLeaderboard = () => {
    setShowLeaderboard(true);
  };

  const minutes = String(Math.floor(time / 60));
  const seconds = String(time % 60);

  return (
    <Overlay>
      {showLeaderboard && <Leaderboard />}
      <StyledModal>
        <h2>Congratulations!</h2>
        <span>Submit your time below or play again</span>
        {time !== 0
          ? `${minutes.length < 2 ? "0" + minutes : minutes}:${
              seconds.length < 2 ? "0" + seconds : seconds
            }`
          : "..."}
        {showForm ? (
          <form onSubmit={onSubmit}>
            <input type="text" maxLength="3" required ref={inputRef} />
            <button>Submit</button>
          </form>
        ) : (
          <div>Submitted</div>
        )}
        <button onClick={onShowLeaderboard}>View Leaderboard</button>
        <button onClick={onRestart}>Play Again</button>
      </StyledModal>
    </Overlay>
  );
}

export default GameOverModal;
