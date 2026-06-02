import styled from "styled-components";
import { cores } from "../../Styles";
import Button from "../button";

export const SideBar = styled.div`
  background-color: ${cores.vermelha};
  z-index: 1;
  padding: 40px 16px 0 16px;

  width: 360px;
  height: 100%;

  display: flex;
  flex-direction: column;

  @media (max-width: 425px) {
    width: 280px;
    height: 100%;
  }
`;

export const Buttoncss = styled(Button)`
  background-color: ${cores.fundo_footer};
  border: none;
  color: ${cores.vermelha};
  width: 100%;
  margin-top: 16px;
  height: 30px;
  font-family: "Roboto", sans-serif;
`;

export const Titulo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  color: ${cores.fundo_footer};
`;

export const Dados = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 16px;
  color: ${cores.fundo_footer};
`;

export const Titulo2 = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 16px;
  color: ${cores.fundo_footer};
`;

export const Cep = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  margin-top: 8px;

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  input {
    background-color: ${cores.fundo_footer};
    border: none;
    width: 155px;
    height: 32px;
    margin-top: 8px;
  }
`;

export const Dados2 = styled.input`
  background-color: ${cores.fundo_footer};
  border: none;
  color: ${cores.vermelha};
  width: 100%;
  height: 30px;
  margin-top: 8px;
  font-family: "Roboto", sans-serif;
`;
