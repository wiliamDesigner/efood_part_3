import {
  Centralizandotudo,
  Criandoagrid,
  EditandoFotosdaPizza,
  Quadradosdapizza,
  TituloPizza,
  DescricaoPizza,
  Botao
} from "./styles";

import Modal from "../Modal/Modal";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Produto = {
  id: number;
  nome: string;
  foto: string;
  preco: number;
  descricao: string;
  porcao: string;
};

type Restaurante = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: Produto[];
};

// 🔥 props
type Props = {
  adicionarAoCarrinho: (id: number) => void;
};

function Pizzas({ adicionarAoCarrinho }: Props) {
  const { id } = useParams();
  const restauranteId = Number(id);

  const [open, setOpen] = useState(false);
  const [produtoId, setProdutoId] = useState<number | null>(null);
  const [restaurante, setRestaurante] =
    useState<Restaurante | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://api-ebac.vercel.app/api/efood/restaurantes"
        );

        const data: Restaurante[] = await res.json();
        const restauranteSelecionado =
          data.find((r) => r.id === restauranteId) || null;

        setRestaurante(restauranteSelecionado);
      } catch (error) {
        console.error("Erro:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [restauranteId]);

  if (loading) return <p>Carregando...</p>;
  if (!restaurante) return <p>Erro</p>;

  return (
    <>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        produtoId={produtoId}
        restauranteId={restaurante.id}
      />

      <Centralizandotudo>
        <Criandoagrid>
          {restaurante.cardapio.map((pizza) => (
            <Quadradosdapizza key={pizza.id}>
              <EditandoFotosdaPizza
                src={pizza.foto}
                alt={pizza.nome}
              />

              <TituloPizza>{pizza.nome}</TituloPizza>

              <DescricaoPizza>
                {pizza.descricao}
              </DescricaoPizza>

              <Botao
                onClick={() => {
                  adicionarAoCarrinho(pizza.id); // 🔥 aqui atualiza
                  setProdutoId(pizza.id);
                  setOpen(true);
                }}
              >
                Adicionar ao Carrinho
              </Botao>
            </Quadradosdapizza>
          ))}
        </Criandoagrid>
      </Centralizandotudo>
    </>
  );
}

export default Pizzas;