import Header from "../../components/Header";
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
      </LayoutContainer>
      <Footer/>
      <Cart/>

    </>
  );
}

export default Home;
