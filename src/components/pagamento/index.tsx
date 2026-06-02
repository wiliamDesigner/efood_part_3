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

  // VALIDAÇÃO
  const validarPagamento = () => {
    if (!paymentData.card.name.trim()) {
      alert("Preencha o nome do cartão");
      return false;
    }

    if (!paymentData.card.number.trim()) {
      alert("Preencha o número do cartão");
      return false;
    }

    if (paymentData.card.number.length < 16) {
      alert("Número do cartão inválido");
      return false;
    }

    if (!paymentData.card.code.trim()) {
      alert("Preencha o CVV");
      return false;
    }

    if (paymentData.card.code.length < 3) {
      alert("CVV inválido");
      return false;
    }

    if (!paymentData.card.expires.month.trim()) {
      alert("Preencha o mês de vencimento");
      return false;
    }

    if (paymentData.card.expires.month.length < 2) {
      alert("Mês inválido");
      return false;
    }

    if (!paymentData.card.expires.year.trim()) {
      alert("Preencha o ano de vencimento");
      return false;
    }

    if (paymentData.card.expires.year.length < 4) {
      alert("Ano inválido");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    const formularioValido = validarPagamento();

    if (!formularioValido) {
      return;
    }

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
                  maxLength={19}
                  value={paymentData.card.number}
                  onChange={(e) =>
                    setPaymentData({
                      ...paymentData,
                      card: {
                        ...paymentData.card,

                        // SOMENTE NÚMEROS
                        number: e.target.value.replace(
                          /\D/g,
                          ""
                        ),
                      },
                    })
                  }
                />
              </div>

              <div className="cvv">
                <label>CVV</label>

                <input
                  type="text"
                  maxLength={4}
                  value={paymentData.card.code}
                  onChange={(e) =>
                    setPaymentData({
                      ...paymentData,
                      card: {
                        ...paymentData.card,

                        // SOMENTE NÚMEROS
                        code: e.target.value.replace(
                          /\D/g,
                          ""
                        ),
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
                  maxLength={2}
                  value={paymentData.card.expires.month}
                  onChange={(e) => {
                    const valor =
                      e.target.value.replace(
                        /\D/g,
                        ""
                      );

                    // NÃO DEIXA DIGITAR MAIOR QUE 12
                    if (Number(valor) <= 12) {
                      setPaymentData({
                        ...paymentData,
                        card: {
                          ...paymentData.card,
                          expires: {
                            ...paymentData.card.expires,
                            month: valor,
                          },
                        },
                      });
                    }
                  }}
                />
              </div>

              <div>
                <label>Ano de vencimento</label>

                <input
                  type="text"
                  maxLength={4}
                  value={paymentData.card.expires.year}
                  onChange={(e) =>
                    setPaymentData({
                      ...paymentData,
                      card: {
                        ...paymentData.card,
                        expires: {
                          ...paymentData.card.expires,

                          // SOMENTE NÚMEROS
                          year: e.target.value.replace(
                            /\D/g,
                            ""
                          ),
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