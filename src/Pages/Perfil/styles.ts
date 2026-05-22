import styled from "styled-components";
import backgroundimg from "../../assets/fundo.png";
import { cores } from "../../Styles";

export const Tudo = styled.div`
  width: 100%;
   background-color: ${cores.branco_mais_claro};/* mudar aqui para mudar o fundo da segunda pagina*/ 
`;

export const Headerbar = styled.header`
   background-image: url(${backgroundimg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
  height: 180px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled.div`
   width: 110%;
  

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 341px;
  

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 12px;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
`;

export const Logo = styled.img`
  width: 125px;
  height: 58px;
`;

export const ParagrafoLeft = styled.p`
  color: ${cores.vermelha};

  font-size: 18px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;

  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Paragraforight = styled.p`
  color: ${cores.vermelha};

  font-size: 18px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;

  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;


export const Containerimgep = styled.div`
  position: relative;

  width: 100%;
  height: 280px;

  overflow: hidden;
`;

export const Imgapressentacao = styled.img`
   width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;

  filter: brightness(0.5);

  display: block;
`;

export const TextoSobreImagem = styled.p`
  position: absolute;

  top: 32px;
  left: 30%;

  color: ${cores.branca};

  font-size: 32px;
  font-family: "Roboto", sans-serif;
  font-weight: 100;

  opacity: 0.7;

  z-index: 2;

  @media (max-width: 768px) {
    left: 24px;
    font-size: 20px;
  }
`;

export const TextoLadoce = styled.p`
  position: absolute;

  bottom: 32px;
  left: 30%;

  color: ${cores.branca};

  font-size: 32px;
  font-weight: 700;

  z-index: 2;

  font-family: "Roboto", sans-serif;

  @media (max-width: 768px) {
    left: 24px;
    font-size: 20px;
  }
`;