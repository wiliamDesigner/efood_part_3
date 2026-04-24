import { CartButton, Fundo, Headerbar, Logo, Paragrafo } from "./styles";
import Logoimg from "../../assets/logo.png";
import Lista from "../lista";
import { useDispatch } from "react-redux";
import { open } from "../../store/reducers/cart"; 

const Header = () => {
  const dispatch = useDispatch();

  const openCart = () => {
    dispatch(open());
  };

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