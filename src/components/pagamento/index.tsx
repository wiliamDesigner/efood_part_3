import { useState } from "react";

import axios from "axios";

import Confirmacao from "../confirmação";

import { SideBar, Buttoncss } from "./styles";

import {
  Cep,
  Dados,
  Dados2,
  Titulo,
  Titulo2,
} from "./styles";

type Props = {
  voltarEntrega: () => void;

  paymentData: any;

  setPaymentData: React.Dispatch<
    React.SetStateAction<any>
  >;

  deliveryData: any;

  itens: any;
};

const Pagamento = ({
  voltarEntrega,
  paymentData,
  setPaymentData,
  deliveryData,
  itens,
}: Props) => {
  const [tela, setTela] = useState("pagamento");

  const [orderId, setOrderId] = useState("");

  const handleSubmit = async () => {
    const payload = {
      products: itens.map((item: any) => ({
        id: item.id,
        price: item.preco,
      })),

      delivery: deliveryData,

      payment: paymentData,
    };

    try {
      const response = await axios.post(
        "https://api-ebac.vercel.app/api/efood/checkout",
        payload
      );

      setOrderId(response.data.orderId);

      setTela("confirmacao");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {tela === "pagamento" && (
        <SideBar>
          <Titulo>
            <h2>Pagamento - Valor a pagar</h2>
          </Titulo>

          <Dados>
            <Titulo2>Nome do cartão</Titulo2>

            <Dados2
              type="text"
              value={paymentData.card.name}
              onChange={(e) =>
                setPaymentData({
                  ...paymentData,
                  card: {
                    ...paymentData.card,
                    name: e.target.value,
                  },
                })
              }
            />

            <Cep>
              <div className="cartao">
                <label>Número do cartão</label>

                <input
                  type="text"
                  value={paymentData.card.number}
                  onChange={(e) =>
                    setPaymentData({
                      ...paymentData,
                      card: {
                        ...paymentData.card,
                        number: e.target.value,
                      },
                    })
                  }
                />
              </div>

              <div className="cvv">
                <label>CVV</label>

                <input
                  type="text"
                  value={paymentData.card.code}
                  onChange={(e) =>
                    setPaymentData({
                      ...paymentData,
                      card: {
                        ...paymentData.card,
                        code: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </Cep>

            <Cep>
              <div>
                <label>Mês de vencimento</label>

                <input
                  type="text"
                  value={paymentData.card.expires.month}
                  onChange={(e) =>
                    setPaymentData({
                      ...paymentData,
                      card: {
                        ...paymentData.card,
                        expires: {
                          ...paymentData.card.expires,
                          month: e.target.value,
                        },
                      },
                    })
                  }
                />
              </div>

              <div>
                <label>Ano de vencimento</label>

                <input
                  type="text"
                  value={paymentData.card.expires.year}
                  onChange={(e) =>
                    setPaymentData({
                      ...paymentData,
                      card: {
                        ...paymentData.card,
                        expires: {
                          ...paymentData.card.expires,
                          year: e.target.value,
                        },
                      },
                    })
                  }
                />
              </div>
            </Cep>
          </Dados>

          <Buttoncss
            as="button"
            type="button"
            onClick={handleSubmit}
          >
            Finalizar pagamento
          </Buttoncss>

          <Buttoncss
            as="button"
            type="button"
            onClick={voltarEntrega}
          >
            Voltar para a edição de endereço
          </Buttoncss>
        </SideBar>
      )}

      {tela === "confirmacao" && (
        <Confirmacao orderId={orderId} />
      )}
    </>
  );
};

export default Pagamento;