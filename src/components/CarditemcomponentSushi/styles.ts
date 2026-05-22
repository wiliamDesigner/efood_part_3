import styled from "styled-components";
import { cores } from "../../Styles";

export const CardImageSushi = styled.img`
  width: 100%;
  height: 224px;
  object-fit: cover;
`;

export const CardImageGroupSushi = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 472px);
  justify-content: center;
  column-gap: 80px;
  row-gap: 48px;
  margin-top: 80px;
  width: 100%;
  margin-bottom: 120px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const CardSushiWrapper = styled.div`
  position: relative;
  border: 1px solid ${cores.vermelha};
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: ${cores.vermelha};
`;

export const Linha = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 224px;
  overflow: hidden;
`;

export const LinhaDoTitulo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  padding: 0 8px;
`;

export const NomedaComida = styled.h1`
  font-size: 18px;
  font-weight: 700px;
`;

export const NotaComEstrela = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const AvaliacaoNotas = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

export const DescricaodoPrato = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
  padding: 0 8px;
`;

export const SaibaMais = styled.button`
  margin-left: 8px;
  width: 82px;
  height: 24px;
  border: none;
  background-color: ${cores.vermelha};
  color: #FFF8F2;
  cursor: pointer;
  margin-bottom: 8px;
  margin-top: 16px;
`;

export const TipodeComida = styled.h2`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 70px;
  height: 30px;
  background-color: ${cores.vermelha};
  color: #FFF8F2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

export const DestaquedaSemana = styled.h2`
  position: absolute;
  top: 16px;
  right: 96px;
  width: 140px;
  height: 30px;
  background-color: ${cores.vermelha};
  color: #FFF8F2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;