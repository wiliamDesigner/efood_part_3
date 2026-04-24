import styled from "styled-components";
import { cores } from "../../../Styles";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 298px;
  background-color:${cores.fundo_footer} ;
`;

export const Logo=styled.img`
margin-bottom: 32px;

`

export const Texto=styled.p`
color: ${cores.vermelha};
margin-top: 80px;
font-size: 10px;
`