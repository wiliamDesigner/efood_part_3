import Header from "../../components/Header";
import Cardlist from "../../components/Cardlista";
import { Globalcss } from "../../../src/Styles";
import Footer from "../../components/footer";
import { LayoutContainer } from "../../components/layout";
import Cart from "../../components/Cart";


function Home() {
  return (
    <>
      <Globalcss />

      <LayoutContainer>
        <Header/>
        <Cardlist/>
      </LayoutContainer>
      <Footer/>
      <Cart/>

    </>
  );
}

export default Home;
