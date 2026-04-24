import styled from "styled-components";
import { cores } from "../../Styles";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 

  width: 100%;
  max-width: 1366px; 
  margin: 0 auto;

  height: 298px; 
  background-color: ${cores.fundo_footer};

  text-align: center;
  gap: 16px; 

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%; 
    width: 100%; 

  }
`;

export const Logo = styled.img`
  margin: 0;
   
   @media (max-width: 768px) {
  display: block;
  margin: 0 auto;
  text-align: center;
}
`;

export const Texto = styled.p`
  color: ${cores.vermelha};
  font-size: 10px;
  text-align: center;
  max-width: 600px;
  margin: 0;
`;

export const Redessociaisimg = styled.div`
  margin-top: 32px;
`;