import styled from "styled-components";
import { cores } from "../../../Styles";

export const Centralizandotudo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;

`;

export const Criandoagrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 80px;
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  box-sizing: border-box;

   @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 400px;   /* 👈 controla largura */
    margin: 0 auto;     /* 👈 CENTRALIZA */
    padding: 0;         /* 👈 remove empurrão lateral */
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    max-width: 400px;   /* 👈 controla largura */
    margin: 0 auto;     /* 👈 CENTRALIZA */
    padding: 0;         /* 👈 remove empurrão lateral */
  }
`;

export const Quadradosdapizza = styled.div`
  background-color: ${cores.vermelha};
  color: #FFF8F2;
  border: 3px solid ${cores.vermelha};
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4px;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  
`;

export const EditandoFotosdaPizza = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
`;

export const TituloPizza = styled.h2`
  font-size: 18px;
  margin: 12px 0 8px;
`;

export const DescricaoPizza = styled.p`
  display: flex;
  font-size: 14px;
  margin-bottom: 16px;
`;

export const Botao = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:#FFF8F2;
  margin-top: auto;
;
  width: 304px;
  height: 24px;
  color: ${cores.vermelha};
  border: none;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  align-self: center;

  &:hover {
    background-color:#FFF8F2;
  }
`;
