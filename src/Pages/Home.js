import React from "react";
import styled from "styled-components";

const Background = styled.div`
  justify-content: center;
  margin: 100px;
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
`;

const Title = styled.div`
  background: springgreen;
  display: inline;
  font-size: 48px;
  display: flex;
  color: black;
  font-weight: 500;
  justify-content: center;
  align-item: baseline;
  margin-bottom: 10px;
`;

const Home = () => {
  return (
    <Background>
      <Title>Frontend Developer,</Title>
      <Title>Portfolio.</Title>
    </Background>
  );
};

export default Home;
