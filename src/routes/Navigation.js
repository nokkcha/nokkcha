import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import me from "../assets/me.jpeg";

const Container = styled.div`
  text-align: left;
  height: 100%;
  padding: 30px 10px 10px 30px;
  background: white;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.5);
`;

const Nav = styled(Link)`
  text-decoration: none;
  color: black;
  display: block;
  margin: 14px;
  font-family: "Montserrat", sans-serif;
  &: hover {
    font-weight: bold;
  }
`;

const Img = styled.img`
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Navigation = () => {
  return (
    <>
      <Container>
        <div>
          <Img src={me} width={120}></Img>
        </div>
        <Nav to="/home">Home</Nav>
        <Nav to="/about">About</Nav>
        <Nav to="/project">Project</Nav>
        <Nav to="/edu">Education</Nav>
      </Container>
    </>
  );
};

export default Navigation;
