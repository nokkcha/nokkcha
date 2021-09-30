import React, { useState } from "react";
import styled from "styled-components";
import EduContent from "./EduContent";

const Background = styled.div`
  left: 11em;
`;
const Container = styled.div`
  padding: 30px 0 30px 0;
  line-height: 1.7em;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.5);
  background: white;
  margin: 30px;
`;

const Content = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  justify-content: center;
`;

const Education = () => {
  return (
    <Background>
      <Container>
        <Content>
          <EduContent />
        </Content>
      </Container>
    </Background>
  );
};

export default Education;
