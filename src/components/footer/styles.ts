import styled from "styled-components";
import { cores } from "../../Styles";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin: 0 auto;
  height: 298px;

  background-color: ${cores.fundo_footer};

  text-align: center;
  gap: 16px;

  padding-top: 40px;
  padding-bottom: 40px;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 100%;
    width: 100%;

    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const Logo = styled.img`
 width: 125px;
 height: 57.5px;
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
  font-weight: 400;

  text-align: center;
  max-width: 600px;

  margin-top: 48px;
  line-height: 16px;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const Redessociaisimg = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;

  img {
    width: 88px;
    height: 24px;
    object-fit: contain;
    cursor: pointer;
  }
`;