import React, { useState } from "react";
import { Page, Document } from "react-pdf";
import styled from "styled-components";
import portfolio from "../assets/Portfolio_kms.pdf";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Portfolio = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <Background>
      <Document file={portfolio} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        {/* 이전페이지 보기 */}
        <PageContainer>
          <Prev
            onClick={() =>
              pageNumber > 1 ? setPageNumber(pageNumber - 1) : null
            }
          >
            &lt;
          </Prev>
          <NumofPage>
            Page {pageNumber} of {numPages}
          </NumofPage>
          {/* 다음 페이지 보기 */}
          <Next
            onClick={() =>
              pageNumber < numPages ? setPageNumber(pageNumber + 1) : null
            }
          >
            &gt;
          </Next>
        </PageContainer>
      </p>
    </Background>
  );
};

const Background = styled.div`
  margin: 30px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
`;

const Prev = styled.span`
  margin: 20px;
`;

const Next = styled.span`
  margin: 20px;
`;

const NumofPage = styled.span``;

const PageContainer = styled.div`
  font-weight: bold;
  background: springgreen;
  border-radius: 20px;
  padding: 3px;
  position: relative;
  bottom: 10px;
  display: inline;
  margin-left: 50%;
  color: black;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.5);
  font-family: "Montserrat", sans-serif;
`;
export default Portfolio;
