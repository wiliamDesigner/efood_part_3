import { useState } from "react";

import Pagamento from "../pagamento";

import {
  SideBar,
  Buttoncss,
  Cep,
  Dados,
  Dados2,
  Titulo,
  Titulo2,
} from "./styles";

type Props = {
  voltarCarrinho: () => void;

  deliveryData: any;

  setDeliveryData: React.Dispatch<
    React.SetStateAction<any>
  >;

  paymentData: any;

  setPaymentData: React.Dispatch<
    React.SetStateAction<any>
  >;

  itens: any;
};

const Entrega = ({
  voltarCarrinho,
  deliveryData,
  setDeliveryData,
  paymentData,
  setPaymentData,
  itens,
}: Props) => {
  const [tela, setTela] = useState("entrega");

  function validarFormulario() {
    if (!deliveryData.receiver.trim()) {
      alert("Preencha quem irá entregar");
      return false;
    }

    if (!deliveryData.address.description.trim()) {
      alert("Preencha o endereço");
      return false;
    }

    if (!deliveryData.address.city.trim()) {
      alert("Preencha a cidade");
      return false;
    }

    if (!deliveryData.address.zipCode.trim()) {
      alert("Preencha o CEP");
      return false;
    }

    if (deliveryData.address.zipCode.length < 8) {
      alert("CEP inválido");
      return false;
    }

    if (!deliveryData.address.number.trim()) {
      alert("Preencha o número");
      return false;
    }

    return true;
  }

  function continuarPagamento() {
    const formularioValido = validarFormulario();

    if (formularioValido) {
      setTela("pagamento");
    }
  }

  return (
    <>
      {tela === "entrega" && (
        <SideBar>
          <Titulo>
            <h2>Entrega</h2>
          </Titulo>

          <Dados>
            <Titulo2>Quem irá receber</Titulo2>

            <Dados2
              type="text"
              value={deliveryData.receiver}
              onChange={(e) =>
                setDeliveryData({
                  ...deliveryData,
                  receiver: e.target.value,
                })
              }
            />

            <Titulo2>Endereço</Titulo2>

            <Dados2
              type="text"
              value={deliveryData.address.description}
              onChange={(e) =>
                setDeliveryData({
                  ...deliveryData,
                  address: {
                    ...deliveryData.address,
                    description: e.target.value,
                  },
                })
              }
            />

            <Titulo2>Cidade</Titulo2>

            <Dados2
              type="text"
              value={deliveryData.address.city}
              onChange={(e) =>
                setDeliveryData({
                  ...deliveryData,
                  address: {
                    ...deliveryData.address,
                    city: e.target.value,
                  },
                })
              }
            />

            <Cep>
              <div>
                <label>CEP</label>

                <input
                  type="text"
                  maxLength={8}
                  value={deliveryData.address.zipCode}
                  onChange={(e) =>
                    setDeliveryData({
                      ...deliveryData,
                      address: {
                        ...deliveryData.address,

                        // SOMENTE NÚMEROS
                        zipCode: e.target.value.replace(
                          /\D/g,
                          ""
                        ),
                      },
                    })
                  }
                />
              </div>

              <div>
                <label>Número</label>

                <input
                  type="text"
                  maxLength={4}
                  value={deliveryData.address.number}
                  onChange={(e) =>
                    setDeliveryData({
                      ...deliveryData,
                      address: {
                        ...deliveryData.address,

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
            </Cep>

            <p>Complemento (Opcional)</p>

            <Dados2
              type="text"
              value={deliveryData.address.complement}
              onChange={(e) =>
                setDeliveryData({
                  ...deliveryData,
                  address: {
                    ...deliveryData.address,
                    complement: e.target.value,
                  },
                })
              }
            />
          </Dados>

          <Buttoncss
            as="button"
            type="button"
            onClick={continuarPagamento}
          >
            Continuar com o pagamento
          </Buttoncss>

          <Buttoncss
            as="button"
            type="button"
            onClick={voltarCarrinho}
          >
            Voltar para o carrinho
          </Buttoncss>
        </SideBar>
      )}

      {tela === "pagamento" && (
        <Pagamento
          voltarEntrega={() => setTela("entrega")}
          paymentData={paymentData}
          setPaymentData={setPaymentData}
          deliveryData={deliveryData}
          itens={itens}
        />
      )}
    </>
  );
};

export default Entrega;