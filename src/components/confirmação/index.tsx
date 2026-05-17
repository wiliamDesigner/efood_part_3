import { SideBar, Buttoncss, Agradecimento } from "./styles";

import {
  Titulo,
} from "./styles";

const Confirmacao = () => {
  return (
    <SideBar>
      <Titulo>
        <h2>Pedido Realizado-</h2>
      </Titulo>
    <Agradecimento>
        Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
    </Agradecimento>

    <Agradecimento>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. 
    </Agradecimento>

    <Agradecimento>
        Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
    </Agradecimento>

    <Agradecimento>
        Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
    </Agradecimento>

      <Buttoncss title="concluir">
        concluir
      </Buttoncss>
    </SideBar>
  );
};

export default Confirmacao;