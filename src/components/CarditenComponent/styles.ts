import styled from "styled-components";
export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.img`
  width: 472px;
  height: 217px;
  object-fit: cover;
`;



export const CardImageGroup = styled.div`
   display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
`;
