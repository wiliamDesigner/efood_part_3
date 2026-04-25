
import { remove } from "../../store/reducers/cart";

import {
  Overlay,
  CartContainer,
  SideBar,
  Buttoncss,
  Item,
  ValTotal,
  Preco,
  Comida,
  ButtonX,
} from "../Cart/styles";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store"; 
import { close } from "../../store/reducers/cart";

const Cart = () => {
  const { itens, isOpen } = useSelector((state: RootState) => state.cart); 

  const dispatch = useDispatch();
  
  const closeCart = () => {
    dispatch(close());
  };

  // ✅ ADICIONADO: cálculo do total
  const total = itens.reduce((acc, item) => acc + item.preco, 0);

  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {itens.map((item) => (
            <Item key={item.id}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <img src={item.foto} alt={item.nome} />

                <Comida>
                  <h3>{item.nome}</h3>
                  <Preco>
                    {item.preco.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </Preco>
                </Comida>
              </div>

             <ButtonX onClick={() => dispatch(remove(item.id))}>
                 🗑
              </ButtonX>
            </Item>
          ))}
        </ul>

        <ValTotal>
          <span>Valor Total</span>

          {/* ✅ ALTERADO: agora é dinâmico */}
          <span>
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </ValTotal>

        <Buttoncss title="clicke aqui para continuar com a compra">
          Continuar com a entrega
        </Buttoncss>
      </SideBar>
    </CartContainer>
  );
};

export default Cart;