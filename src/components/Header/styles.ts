import styled from "styled-components";
import backgroundimg from "../../assets/fundo.png";
import { cores } from "../../Styles";


export const Headerbar = styled.header`
  position: relative;
  width: 100%;
  height: auto;
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 65.5px;
   z-index: 1;
   background-color: ${cores.fundo_footer};
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    text-align: center;
    max-width: 100%; /* 👈 opcional: deixa mais estreito no tablet */
  }

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    text-align: center;
    max-width: 100%; /* 👈 opcional: deixa mais estreito no celular*/
  }

`;


export const Fundo = styled.div` 
  background-image: url(${backgroundimg});
  background-size: 70%; 
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%;
  height: 400px; 
  z-index: 0; 
  pointer-events: none; 
 
`;


export const Logo = styled.img`

  width: 125px;
  height: 57.5px;
  z-index: 2;
`;

export const Paragrafo = styled.p`
  max-width: 500px;
  color: ${cores.vermelha};
  text-align: center;
  font-size: 36px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  line-height: 100%;
  z-index: 2;
`;

export const CartButton = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  background-color: ${cores.vermelha};
  color: white;
  border: none;
  cursor: pointer;
  z-index: 2;
`;
