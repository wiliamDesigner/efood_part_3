import styled from "styled-components";
import { cores } from "../../Styles";


export const CardImageSushi = styled.img`
  width: 472px;
  height: 217px;
  object-fit: cover;
`;

export const CardImageGroupSushi = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  column-gap: 40px; 
  row-gap: 40px; 
  margin-top: 80px;


@media (max-width: 768px) {
  grid-template-columns: 1fr;
  justify-items: center;

  margin-top: 250px; 
  margin-left: 240px;
}


@media (max-width: 425px) {
  grid-template-columns: 1fr;
  justify-items: center;

  margin-top: 250px; 
  margin-left: -60px;
}



`;

export const CardSushiWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px; 
  position: relative;
  height: 100%;

@media (max-width: 425px) {
 
  width: 70%;
}


`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 217px; 
  overflow: hidden;
`;

export const NomedaComida=styled.h1`
font-size: 18px;
margin: 0px;
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
margin-top: auto;
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
  margin: 0 12px 12px 12px;  
`;

export const NotaComEstrela = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

