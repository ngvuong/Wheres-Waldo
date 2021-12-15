import React, { useRef, useState } from "react";
import Leaderboard from "./Leaderboard";
import { Overlay } from "./styles/Overlay";
import { StyledModal } from "./styles/Modal.styled";
import Button from "./Button";
import { getFirestore, collection, addDoc } from "firebase/firestore";

function GameOverModal({ onRestart, time }) {
  const [showModal, setShowModal] = useState(true);
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
    setShowModal(false);
  };

  const onCloseLeaderboard = () => {
    setShowLeaderboard(false);
    setShowModal(true);
  };

  const minutes = String(Math.floor(time / 60));
  const seconds = String(time % 60);

  return (
    <Overlay>
      {showLeaderboard && <Leaderboard onClose={onCloseLeaderboard} />}
      {showModal && (
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
              <input
                type="text"
                maxLength="3"
                placeholder="Name"
                required
                ref={inputRef}
              />
              <Button bg="#f6fb9e">SUBMIT</Button>
            </form>
          ) : (
            <div>Submitted</div>
          )}
          <Button
            bg="linear-gradient(to right,#8ffce6,#02fc9c)"
            onClick={onShowLeaderboard}
          >
            View Leaderboard
          </Button>
          <Button
            bg="linear-gradient(45deg,#fc8383,#8e8eff)"
            onClick={onRestart}
          >
            Play Again
          </Button>
        </StyledModal>
      )}
    </Overlay>
  );
}

export default GameOverModal;
