import styled from "styled-components";
import { cores } from "../../Styles";
import Button from "../button";


export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  font-family: 'Roboto', sans-serif;

  &.is-open {
    display: flex;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`;


export const SideBar = styled.div`
  background-color: ${cores.vermelha};
  z-index: 1;
  padding: 40px 16px 0 16px;

  width: 360px;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const Buttoncss = styled(Button)`
  background-color: ${cores.fundo_footer};
  border: none;
  color: ${cores.vermelha};
  width: 100%;
  margin-top: 16px;
  height: 30px;
font-family: 'Roboto', sans-serif;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    font-family: Roboto;
    justify-content: space-between;
  border: 2px solid ${cores.fundo_footer};
  background-color: ${cores.fundo_footer};
  padding: 16px;
  margin-bottom: 16px;
  color: ${cores.vermelha};
  margin-right: 20px;


  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

`;

export const ValTotal = styled.div`
    display: flex;
  justify-content: space-between;
  align-items: center;
margin-top: 16px;
color: ${cores.fundo_footer};
`;

export const Preco = styled.div`
    margin-top: 16px;
`;


export const Comida = styled.div`
    margin-left: 8px;
`;

export const ButtonX = styled.button`
 width: 16px;
 height: 16px;
 border: none;
  cursor: pointer;
  font-size: 16px;
  background-color: transparent;
  
`;