import React, { useState } from "react";
import { Chip } from "@mui/material";
import { Stack } from "@mui/material";
import SmoothRender from "react-smooth-render";
import styled from "styled-components";

const Title = styled.div.attrs((props) => ({
  className: props.className,
}))`
  & .active {
    color: red;
  }
  border: 1px solid #dedede;
  margin-bottom: 10px;
  margin-left: 10px;
  background: #e3e6e8;
  width: 40em;
  padding: 14px;

  &: hover {
    color: #276391;
    transition: 0.5s;
  }
`;

const InnerContents = styled.div`
  background: white;
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 14px;
  border: 1px solid #dedede;
  width: 40em;
`;

const EduContent = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [eduId, setEduId] = useState(null);
  const contents = [
    {
      id: 1,
      title: "동아대학교 경영학과 졸업",
      date: "2016.03 - 2021.02",
      content: `마케팅과 홍보에 관심이 많아 경영학과로 진학했습니다. STP에 맞는
    전략을 효율적으로 프로세스 할 수 있는 마케팅과 다양한 방법론에
    기인해 조직을 유연하게 관리할 수 있는 조직에 대한 수업을 주로
    들었습니다. 교내 온라인 홍보 서포터즈 1기로 디자인팀으로 활동하면서 SNS 채널에
    게시할 콘텐츠를 생산하고, 교내 SNS 채널 성장을 위해 다양한
    아이디어를 기획한 경험이 있습니다.`,
    },
    {
      id: 2,
      title: "부산 ITWILL 스마트 웹앱 개발자 양성 과정 수료",
      date: "2016.03 - 2021.02",
      content: `개발자로 진로를 정하고 나서, 확실하게 직무를 정하기 위해 공부가 더
      필요하다고 생각했습니다. IT전문 교육학원에서 기본적인 프로그래밍
      지식을 익혔습니다. 단기간의 습득이 중요했기 때문에 블로그에 공부한
      것을 정리해가며 지식을 다져나갔습니다. 프로젝트를 진행한 후에 서버와
      데이터를 다루는 백엔드보다는 구체적으로 요구사항을 표현하고 구현하는
      프론트엔드 개발자로 마음을 굳히게 되었습니다.`,
      skills: (
        <Stack direction="row" spacing={1} marginTop={3}>
          <Chip label="Java" />
          <Chip label="JavaScript" />
          <Chip label="Spring" />
          <Chip label="jQuery" />
          <Chip label="CSS" />
          <Chip label="Android" />
          <Chip label="MySQL" />
          <Chip label="Oracle" />
        </Stack>
      ),
    },
    {
      id: 3,
      title: "노마드코더, JS로 크롬 앱 만들기",
      content: `JavaScript 개념을 다지기 위해 강의를 크롬의 momentum 어플리케이션을 만들었습니다.`,
      link: "https://github.com/nokkcha/movie_app_2021",
      skills: (
        <Stack direction="row" spacing={1} marginTop={3}>
          <Chip label="JavaScript" />
          <Chip label="CSS" />
          <Chip label="HTML" />
        </Stack>
      ),
    },

    {
      id: 4,
      title: "노마드코더, React로 영화 API를 활용해 영화 서비스 페이지 만들기",
      content: `React.js 프레임워크를 익히기 위해 강의를 듣고 만든 영화 웹서비스입니다.`,
      link: "https://github.com/nokkcha/movie_app_2021",
      skills: (
        <Stack direction="row" spacing={1} marginTop={3}>
          <Chip label="React" />
          <Chip label="React-router" />
          <Chip label="JavaScript" />
          <Chip label="CSS" />
        </Stack>
      ),
    },

    {
      id: 5,
      title: "노마드코더, React와 Firebase로 트위터 클론 코딩",
      content:
        "Firebase와 Firestore로 데이터를 관리하고 React와 함께 CRUD를 구현했습니다.",
      link: "https://github.com/nokkcha/movie_app_2021",
      skills: (
        <Stack direction="row" spacing={1} marginTop={3}>
          <Chip label="React" />
          <Chip label="React-router" />
          <Chip label="React-Hook" />
          <Chip label="Firebase" />
          <Chip label="FireStore" />
          <Chip label="JavaScript" />
          <Chip label="CSS" />
        </Stack>
      ),
    },
  ];

  return (
    <>
      {contents.map((data) => (
        <>
          <Title id={data.id}>{data.title}</Title>
          <InnerContents>
            <h6>{data.date}</h6>
            {data.content}
            {data.skills}
          </InnerContents>
          <></>
        </>
      ))}
    </>
  );
};

export default EduContent;
