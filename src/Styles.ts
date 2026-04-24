import { createGlobalStyle } from "styled-components";
import '@fontsource/roboto/700.css';


export const cores = {
  branca: "#eee",
  preta: "#111",
  vermelha: "#E66767",
  branco_mais_claro: "#FFF8F2",
  fundo_footer:"#FFEBD9",
  cinza:"#0007",
};

export const Globalcss = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

body{
    background-color: ${cores.fundo_footer};
    color: ${cores.branca};

    @media (max-width: 768px) {
  body {
    overflow-x: hidden;
  }
  @media (max-width: 425px) {
  body {
    overflow-x: hidden;
  }
}
    
}
`;
