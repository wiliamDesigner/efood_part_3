import styled from "styled-components";
import { cores } from "../../Styles";

export const Cardes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  align-items: start;
  background-color:${cores.branco_mais_claro};

  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px;

  
@media (max-width: 768px) {
  max-width: 100%;
}

@media (max-width: 425px) {
  max-width: 40%;
}

`;

export const CardItem = styled.div`
  width: 100%; 
  height: 181px; 
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  color: ${cores.vermelha};
  border: 1px solid ${cores.vermelha};
  font-size: 18px;
  font-family: "Roboto";

  
`;
