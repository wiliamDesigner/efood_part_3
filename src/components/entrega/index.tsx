import { SideBar, Buttoncss } from "./styles";

import { Cep, Dados, Dados2, Titulo, Titulo2 } from "./styles";

const Entrega = () => {
  return (
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

        <p>Complemento(Opicional)</p>
        <Dados2 type="text" />
      </Dados>

      <Buttoncss title="entrega">Continuar com a pagamento</Buttoncss>

      <Buttoncss title="">Voltar para o carrinho</Buttoncss>
    </SideBar>
  );
};

export default Entrega;
