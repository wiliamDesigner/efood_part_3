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
};

const Entrega = ({ voltarCarrinho }: Props) => {
  const [tela, setTela] = useState("entrega");

  return (
    <>
      {tela === "entrega" && (
        <SideBar>
          <Titulo>
            <h2>Entrega</h2>
          </Titulo>

          <Dados>
            <Titulo2>Quem irá entregar</Titulo2>

            <Dados2 type="text" />

            <Titulo2>Endereço</Titulo2>

            <Dados2 type="text" />

            <Titulo2>Cidade</Titulo2>

            <Dados2 type="text" />

            <Cep>
              <div>
                <label>CEP</label>

                <input type="text" />
              </div>

              <div>
                <label>Número</label>

                <input type="text" />
              </div>
            </Cep>

            <p>Complemento (Opcional)</p>

            <Dados2 type="text" />
          </Dados>

          <Buttoncss
            as="button"
            type="button"
            title="Pagamento"
            onClick={() => setTela("pagamento")}
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
        />
      )}
    </>
  );
};

export default Entrega;