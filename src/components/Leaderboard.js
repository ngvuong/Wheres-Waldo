import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  orderBy,
} from "firebase/firestore";

function Leaderboard({ onClose }) {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    const getRecords = async () => {
      const searchQuery = query(
        collection(getFirestore(), "time"),
        orderBy("time", "asc")
      );

      const querySnapshot = await getDocs(searchQuery);
      querySnapshot.forEach((doc) => {
        setRecords((prevRecords) => {
          const record = doc.data();
          record.id = doc.id;
          return [...prevRecords, record];
        });
      });
    };
    getRecords();
  }, []);

  const times = records.map((doc, i) => {
    const minutes = String(Math.floor(doc.time / 60));
    const seconds = String(doc.time % 60);
    return (
      <div key={doc.id}>
        <div>{i + 1}.</div>
        <div>{doc.name.toUpperCase()}</div>
        <div>
          {minutes.length < 2 ? "0" + minutes : minutes}:
          {seconds.length < 2 ? "0" + seconds : seconds}
        </div>
      </div>
    );
  });

  return (
    <StyledLeaderboard>
      <span onClick={onClose}>&#10006;</span>
      <h2>Leaderboard</h2>
      {times}
    </StyledLeaderboard>
  );
}

export default Leaderboard;

const StyledLeaderboard = styled.div`
  position: absolute;
  width: 70vw;
  height: 80vh;
  text-align: center;
  border-radius: 10px;
  overflow: auto;

  h2 {
    font-size: 2rem;
  }

  span {
    font-size: 2rem;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-bottom: 1px solid white;
    margin: 1rem;
    place-items: start;
  }
`;
