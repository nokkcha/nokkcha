import React from "react";
import notting from "../assets/notting.jpg";
import scentofwoman from "../assets/scentofwoman.jpg";
import parasite from "../assets/parasite_w.jpg";
import slumdog from "../assets/slumdog.jpg";
import assassin from "../assets/assassinate.jpg";
import styled from "styled-components";
import cardnews from "../assets/cardnews.png";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Poster = () => {
  return (
    <Container>
      <img src={notting} width={300} alt={notting} />
      <img src={scentofwoman} width={500} alt={scentofwoman} />
      <img src={parasite} width={300} alt={parasite} />
      <img src={slumdog} width={300} alt={slumdog} />
      <img src={assassin} width={500} alt={assassin} />
      <img src={cardnews} width={500} alt={cardnews} />
      <p>더 많은데 아이클라우드에서 가져올 수가 없어요 😭</p>
    </Container>
  );
};
export default Poster;
