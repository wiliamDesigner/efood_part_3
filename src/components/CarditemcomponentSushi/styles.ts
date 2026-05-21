import styled from "styled-components";
import { cores } from "../../Styles";


export const CardImageSushi = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`;

export const CardImageGroupSushi = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(472px, 472px));
  justify-content: center;
  column-gap: 40px;
  row-gap: 48px;
  margin-top: 80px;
  width: 100%;
 

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    justify-items: center;

    margin-top: 120px;
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;

    justify-items: center;

    margin-top: 80px;
  }
`;


export const CardSushiWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  color: ${cores.vermelha};
  margin-bottom: 120px;
  @media (max-width: 425px) {
    width: 70%;
  }
`;


export const Linha = styled.div` /*linha vermelha em volta das coisas*/
width: 472px;
height: 181px;
border: 1px solid red;
`;


export const ImageWrapper = styled.div`
  width: 100%;
  height: 217px; 
  overflow: hidden;
`;

export const NomedaComida=styled.h1`
font-size: 18px;
margin-left: 7px;
`

export const TipodeComida=styled.h2`
  position: absolute;
  top: 20px;
  right: 30px;
  width: 70px;
  height: 30px;
  background-color: ${cores.vermelha};
  color: #FFF8F2;
  display: flex;
  align-items: center;    
  justify-content: center; 
  font-size: 12px;
 
`

export const DestaquedaSemana=styled.h2`
  position: absolute;
  top: 20px;
  right: 110px;
  width: 140px;
  height: 30px;
  background-color: ${cores.vermelha};
  color: white;
  display: flex;
  align-items: center;    
  justify-content: center; 
  font-size: 12px;
`
export const DescricaodoPrato=styled.p`
font-size: 12px;
color: ${cores.vermelha};
margin-left: 12px;

`

export const SaibaMais=styled.button`
margin-left: 12px;
margin-top: 20px;
color: #FFF8F2;
background-color: ${cores.vermelha};
border: none;
width: 82px;
height: 24px;
`

export const AvaliacaoNotas=styled.span`
font-size: 18px;
color: ${cores.vermelha};
display: flex;
align-items: center;
justify-content: flex-end;



`
export const LinhaDoTitulo = styled.div`
  width: 96%;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  margin-top: 8px;   
`;

export const NotaComEstrela = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

