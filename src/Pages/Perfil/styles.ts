import styled from "styled-components";
import backgroundimg from "../../assets/fundo.png";
import { cores } from "../../Styles";

export const Tudo = styled.div`
  background-color: ${cores.branco_mais_claro};
`;

export const Headerbar = styled.header`
  background-image: url(${backgroundimg});
  max-width: 1366px;
  margin: 0 auto;
  width: 100%;
  padding: 16px 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Menu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  
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
  height: 57.5px;
`;

export const ParagrafoLeft = styled.p`
  color: ${cores.vermelha};
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;

  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Paragraforight = styled.p`
  color: ${cores.vermelha};
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;

  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Containerimg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Imgapressentacao = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  filter: brightness(0.5);
  display: block;
`;

export const Containerimgep = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${cores.branco_mais_claro};
`;

export const TextoSobreImagem = styled.p`
  position: absolute;
  top: 2%;
  left: 170px;
  color: ${cores.branca};
  font-size: 32px;
  z-index: 2;
  opacity: 0.5;
  font-family: "Roboto", sans-serif;

  @media (max-width: 768px) {
    left: 16px;
    font-size: 20px;
  }
`;

export const TextoLadoce = styled.p`
  position: absolute;
  top: 60%;
  left: 170px;
  color: ${cores.branca};
  font-size: 32px;
  font-weight: bold;
  z-index: 2;
  font-family: "Roboto", sans-serif;

  @media (max-width: 768px) {
    left: 16px;
    font-size: 20px;
  }
`;