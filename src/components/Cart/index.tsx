import { useState } from "react";

import { remove } from "../../store/reducers/cart";
import { close } from "../../store/reducers/cart";

import trashIcon from "../../assets/lixeira.png";

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

import Entrega from "../entrega";

const Cart = () => {
  const { itens, isOpen } = useSelector(
    (state: RootState) => state.cart
  );

  const dispatch = useDispatch();

  const [tela, setTela] = useState("cart");

  const closeCart = () => {
    dispatch(close());
    setTela("cart");
  };

  const total = itens.reduce(
    (acc, item) => acc + item.preco,
    0
  );

  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={closeCart} />

      {/* CARRINHO */}
      {tela === "cart" && (
        <SideBar>
          <ul>
            {itens.map((item) => (
              <Item key={item.id}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
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

                <ButtonX
                  type="button"
                  onClick={() => dispatch(remove(item.id))}
                >
                  <img src={trashIcon} alt="Remover item" />
                </ButtonX>
              </Item>
            ))}
          </ul>

          <ValTotal>
            <span>Valor Total</span>

            <span>
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </ValTotal>

          <Buttoncss
            as="button"
            type="button"
            title="Clique aqui para continuar com a compra"
            onClick={() => setTela("entrega")}
          >
            Continuar com a entrega
          </Buttoncss>
        </SideBar>
      )}

      {/* ENTREGA */}
      {tela === "entrega" && (
        <Entrega voltarCarrinho={() => setTela("cart")} />
      )}
    </CartContainer>
  );
};

export default Cart;