import React, { useState } from "react";
import styled from "styled-components";
import Poster from "./Posters";
const Background = styled.div`
  background: white;
  margin: 30px;
  left: 10em;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.5);
`;
const Container = styled.div`
  padding: 30px 0 30px 0;
  margin: 30px;
  line-height: 1.7em;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 20px;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  background: springgreen;
  padding: 0 3px 0 3px;

  &: hover {
    font-weight: bold;
  }
`;

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 20px;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  background: springgreen;
`;

const About = () => {
  const [isToggled, setIsToggled] = useState(false);
  const ToggleClick = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <Background>
        <Container>
          <div>
            <h3>안녕하세요, 신입 프론트엔드 개발자 김민성입니다.</h3>

            <p>
              어릴 적부터 그림판, 포토샵을 가지고 놀면서 영화 포스터를
              재구성하거나 새롭게 무언가를 만들면서 놀곤 했습니다. 프로그램으로
              직접 내가 원하는 것을 만들어내는 것에 매력을 느끼며, 그래픽
              디자인에 관심을 가지게 되었습니다. 그래서 경영학을 전공했지만 여러
              대외활동에서 디자인팀으로 활동하면서 다양한 콘텐츠를 생산하기도
              하고 취미로 영화 포스터를 재구성하기도 했습니다. 대외활동을 함께한
              팀원들과 어플리케이션 기획을 주제로 공모전에 출전해 입상하면서
              깔끔한 UI/UX 디자인에 관심을 가지게 되었고, 자연스럽게 개발자라는
              직업을 접하게 되었습니다. 6개월 간의 IT 교육과정을 통해 프로그래밍
              지식을 습득했고, 수료 후에도 프론트엔드 개발자로서 커리어를
              시작하기 위해 꾸준히 시간을 들이며 공부하고 있습니다.
              <br />
              <br /> *만들었던 포스터들은 밑에 접어두었습니다.
            </p>
            <Link href="https://udpressure.tistory.com/">Blog</Link>
            <Link href="https://github.com/nokkcha">Github</Link>
            <br />
            <h3>개발을 하게 된 계기</h3>
            <p>
              인생에서 이루고 싶은 목표 중 한가지는 해외에서 커리어를 쌓아보는
              것입니다. 목표를 이루기 위해 구체적인 로드맵을 그리면서 어떤
              진로를 선택해야 할지 고민했습니다. 내가 성장을 위해 꾸준히
              노력하고 몰입할 수 있는 것이 1순위, 내가 즐겁게 하면서 보람을 느낄
              수 있는 일이 2순위였습니다. 자연스럽게 접한 개발자라는 직업을
              알아보면서 다양한 가능성이 열린 매력적인 직업이라고 생각했습니다.
              실제로 개발을 배우고 프로젝트를 진행하면서 구현하는 과정이 즐겁게
              느껴졌고 배포했을 때 뿌듯함도 느꼈습니다.
            </p>
          </div>

          <Button onClick={ToggleClick}>만들었던 포스터와 카드뉴스 </Button>
          <section>
            {isToggled ? (
              <>
                <Poster />
              </>
            ) : (
              <></>
            )}
          </section>
        </Container>
      </Background>
    </>
  );
};
export default About;
