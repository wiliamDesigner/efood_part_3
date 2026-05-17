import { useState } from "react";

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
};

const Pagamento = ({ voltarEntrega }: Props) => {
  const [tela, setTela] = useState("pagamento");

  return (
    <>
      {tela === "pagamento" && (
        <SideBar>
          <Titulo>
            <h2>Pagamento - Valor a pagar</h2>
          </Titulo>

          <Dados>
            <Titulo2>Nome do cartão</Titulo2>

            <Dados2 type="text" />

            <Cep>
              <div className="cartao">
                <label>Número do cartão</label>

                <input type="text" />
              </div>

              <div className="cvv">
                <label>CVV</label>

                <input type="text" />
              </div>
            </Cep>

            <Cep>
              <div>
                <label>Mês de vencimento</label>

                <input type="text" />
              </div>

              <div>
                <label>Ano de vencimento</label>

                <input type="text" />
              </div>
            </Cep>
          </Dados>

          <Buttoncss
            as="button"
            type="button"
            title="entrega"
            onClick={() => setTela("confirmacao")}
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

      {tela === "confirmacao" && <Confirmacao />}
    </>
  );
};

export default Pagamento;