import { Fundo, Headerbar, Logo, Paragrafo } from "./styles";
import Logoimg from "../../assets/logo.png";
import Lista from "../lista";



const Header = () => {
  

  return (
    <Headerbar>
      <Fundo />

      <Logo src={Logoimg} alt="logo" />

      <Paragrafo>
        Viva experiências gastronômicas no conforto da sua casa
      </Paragrafo>

      <Lista />
    </Headerbar>
  );
};

export default Header;