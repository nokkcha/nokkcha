import React from "react";
import styled from "styled-components";
import findhome from "../assets/findhome.png";
import traveller from "../assets/traveller.png";
import imhere from "../assets/imhere.png";
import imhere2 from "../assets/imhere2.png";

const Background = styled.div`
  font-family: "Montserrat", sans-serif;
`;
const Container = styled.div`
  padding: 30px 0 30px 0;
  line-height: 1.7em;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.5);
  background: white;
  margin: 30px;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  display: flex;
  margin-top: 30px;
`;

const Image = styled.img`
  transition-duration: 1s;

  &: hover {
    transform: scale(1.1, 1.1);
    transition-duration: 0.5s;
  }
`;

const Content = styled.div`
  margin-left: 30px;
`;

const Hosting = styled.a`
  text-decoration: none;
  color: white;
  background: gray;
  padding: 13px;
  border-radius: 23px;
  font-weight: bold;
  font-size: 10px;
`;

const Project = () => {
  return (
    <>
      <Background>
        <Container>
          <Content>
            <h2>1. FindHome - 좋은 집 찾기</h2>
            <ImageContainer>
              <Image alt="findhome" src={findhome} width={400} />
            </ImageContainer>
          </Content>
        </Container>

        <Container>
          <Content>
            <h2>2. Traveller - 여행자 커뮤니티</h2>
            <Hosting href="https://nokkcha.github.io/Traveller_project/">
              페이지로 이동
            </Hosting>
            <ImageContainer>
              <Image alt="traveller" src={traveller} width={400} />
            </ImageContainer>
          </Content>
        </Container>

        <Container>
          <Content>
            <h2>3. I'm Here - 내 위치 찾기</h2>
            <Hosting href="https://www.iam-here.site/">페이지로 이동</Hosting>
            <ImageContainer>
              <Image alt="traveller" src={imhere} width={300} />
              <Image alt="traveller" src={imhere2} width={300} />
            </ImageContainer>
          </Content>
        </Container>
      </Background>
    </>
  );
};
export default Project;
