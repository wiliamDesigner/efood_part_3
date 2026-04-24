import { FooterContainer, Logo, Texto } from "./styles";
import logo from "../../../assets/logo.png";
import Redessociais from "../../../assets/redes sociais.png";

const Footer = () => (
  <FooterContainer>
    <Logo src={logo} alt="Logo" />
    <img src={Redessociais} alt="Redes Sociais" />
    <Texto>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{" "}
    </Texto>
  </FooterContainer>
);

export default Footer;
