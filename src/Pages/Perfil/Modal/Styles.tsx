import styled from "styled-components";
import { cores } from "../../../Styles";
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Organizacao=styled.div`
display: flex;
flex-direction: row;
gap: 24px;
align-items: center;
height: 100%;

 @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center;
  }

  @media (max-width: 425px) {
    flex-direction: column; 
    align-items: center;
    height: 30px;
  }

`

export const ImagemProduto=styled.img`
width: 280px;
height: 300px;
object-fit: cover;
 
@media (max-width: 425px) {
   width: 200px;
  }

`

export const TextoeBotoes=styled.div`
display: flex;
flex-direction: column;
margin-left: 24px;
align-items: flex-start;
text-align: left;

`

export const TextoTitulo=styled.h1`
color: #FFFFFF;
font-size: 18px;
`

export const Textodescricao=styled.p`
color:#FFFFFF ;
font-family: 'Roboto', sans-serif; 
font-size: 14px;



`


export const Btnfechar=styled.button`
font-size: 16px;
color: ${cores.branca};
background: transparent;
border: none;
`

export const Content = styled.div`
  width: 1024px;
  height: 344px; 
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${cores.vermelha};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);


   @media (max-width: 768px) {
    width: 50%;        /* 👈 diminui a largura */
    height: 70%;      /* 👈 deixa crescer naturalmente */
  }


   @media (max-width: 425px) {
    width: 50%;        /* 👈 diminui a largura */
    height: 70%;      /* 👈 deixa crescer naturalmente */
  }

`;


export const Texto = styled.h2`
  color: ${cores.branco_mais_claro};
`;


export const BotaoComprar=styled.button`
width: 218px;
height: 24px;
color:${cores.vermelha};
background-color: #FFEBD9;
outline: none;
border: none;
font-size: 14px;
font-family: 'Roboto', sans-serif; 
font-weight: bold;
margin-top: auto;
`