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
    return (
      <div key={doc.id}>
        <div>{i + 1}.</div>
        <div>{doc.name.toUpperCase()}</div>
        <div>{doc.time}</div>
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
  width: 90vw;
  height: 90vh;
  text-align: center;
  color: black;
  background-color: ${({ theme }) => theme.colors.leaderboard};

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

  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-bottom: 1px solid black;
  }
`;
