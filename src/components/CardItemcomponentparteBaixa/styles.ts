import styled from "styled-components";

export const CardContainerMacarao = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 40px;
  align-items: start;
  width: 980px;
  height: auto;
`;

export const CardImageGroupMacarao = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  column-gap: 40px;
  row-gap: 0px;
`;

export const CardImageMacarao = styled.img`
  width: 472px;
  height: 217px;
  object-fit: cover;
`;

export const CardTextMacarao = styled.div`
  font-size: 20px;
  font-family: "Roboto";
`;
