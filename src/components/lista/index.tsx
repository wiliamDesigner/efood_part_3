import imagensuchi from "../../assets/sushi.png";
import imagemmacarrao from "../../assets/macarão.png"; 

import CarditemcomponentSushi from "../CarditemcomponentSushi";
import CarditemcomponentMacarao from "../CardItemcomponentparteBaixa"; 

const Lista = () => (
  <>
    <div>
        <CarditemcomponentSushi />
      <CarditemcomponentMacarao imagem3={imagensuchi} imagem4={imagemmacarrao} /> 
    </div>
  </>
);

export default Lista;
