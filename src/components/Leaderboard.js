import React, { useEffect } from "react";
import styled from "styled-components";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  orderBy,
} from "firebase/firestore";

function Leaderboard() {
  useEffect(() => {
    const getRecord = async () => {
      const searchQuery = query(
        collection(getFirestore(), "time"),
        orderBy("time", "asc")
      );

      const querySnapshot = await getDocs(searchQuery);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    };
    getRecord();
  }, []);

  return (
    <StyledLeaderboard>
      <h2>Leaderboard</h2>
    </StyledLeaderboard>
  );
}

export default Leaderboard;

const StyledLeaderboard = styled.div`
  position: fixed;
  width: 90vw;
  height: 90vh;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.leaderboard};

  h2 {
    font-size: 2rem;
  }
`;
