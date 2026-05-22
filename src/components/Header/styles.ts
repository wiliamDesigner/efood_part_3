import styled from "styled-components";
import backgroundimg from "../../assets/fundo.png";
import { cores } from "../../Styles";


export const Headerbar = styled.header`
  position: relative;
  width: auto;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 65.5px;
   z-index: 1;
   
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    text-align: center;
    max-width: 100%; 
  }

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    text-align: center;
    max-width: 100%; 
  }

`;


export const Fundo = styled.div` 
  background-image: url(${backgroundimg});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: absolute;

 

  width: 300%;
  height: 100%;
  
  /*width: 2031.81px;
  height: 384px;
  tem que deixar assim professor?
*/
  z-index: 0;
  pointer-events: none; 
 
`;


export const Logo = styled.img`

  width: 125px;
  height: 57.5px;
  z-index: 2;
`;

export const Paragrafo = styled.p`
  max-width: 900px;
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
