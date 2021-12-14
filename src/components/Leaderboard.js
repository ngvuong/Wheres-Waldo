import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  orderBy,
} from "firebase/firestore";

function Leaderboard({ onClose }) {
  const recordRef = useRef([]);
  let records = [];
  useEffect(() => {
    const getRecords = async () => {
      const searchQuery = query(
        collection(getFirestore(), "time"),
        orderBy("time", "asc")
      );

      const querySnapshot = await getDocs(searchQuery);
      querySnapshot.forEach((doc) => {
        recordRef.current.push(doc.data());
        console.log(recordRef.current);
      });
    };
    getRecords();
  }, []);

  useEffect(() => {
    records = recordRef.current.map((doc) => {
      return <div>hello</div>;
    });
  }, []);

  return (
    <StyledLeaderboard>
      <span onClick={onClose}>&#10006;</span>
      <h2>Leaderboard</h2>
      {records}
    </StyledLeaderboard>
  );
}

export default Leaderboard;

const StyledLeaderboard = styled.div`
  position: absolute;
  width: 90vw;
  height: 90vh;
  text-align: center;
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
`;
