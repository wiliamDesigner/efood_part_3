import {
  Containerimg,
  Containerimgep,
  Headerbar,
  Imgapressentacao,
  Menu,
  ParagrafoLeft,
  Paragraforight,
  TextoLadoce,
  TextoSobreImagem,
  Tudo
} from "./styles";

import logoimg2 from "../../assets/logo.png";
import Pizzas from "./Pizzas/Pizzas";
import Footer from "./Foot/Footer";
import { Link, useParams } from "react-router-dom";
import { LayoutContainer } from "../../components/layout";
import { useEffect, useState } from "react";

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

function Perfil() {
  const { id } = useParams();
  const restauranteId = Number(id);

  const [restaurante, setRestaurante] = useState<Restaurante | null>(null);
  const [loading, setLoading] = useState(true);

  // 🔥 carrinho
  const [carrinho, setCarrinho] = useState<number[]>([]);

  // 🔥 função adicionar
  function adicionarAoCarrinho(id: number) {
    setCarrinho((prev) => [...prev, id]);
  }

  useEffect(() => {
    async function carregarRestaurante() {
      try {
        const res = await fetch(
          "https://api-ebac.vercel.app/api/efood/restaurantes"
        );
        const data: Restaurante[] = await res.json();
        const encontrado =
          data.find((r) => r.id === restauranteId) || null;
        setRestaurante(encontrado);
      } catch (erro) {
        console.error("Erro:", erro);
      } finally {
        setLoading(false);
      }
    }

    carregarRestaurante();
  }, [restauranteId]);

  if (loading) return <p>Carregando...</p>;
  if (!restaurante) return <p>Restaurante não encontrado.</p>;

  return (
    <Tudo>
      <LayoutContainer>
        <Headerbar>
          <Menu>
            <ParagrafoLeft>Restaurante</ParagrafoLeft>

            <Link to="/">
              <img src={logoimg2} alt="Logo" />
            </Link>

            {/* 🔥 aqui muda automático */}
            <Paragraforight>
              {carrinho.length} Produto(s) no carrinho
            </Paragraforight>
          </Menu>
        </Headerbar>

        <Containerimg>
          <Containerimgep>
            <TextoSobreImagem>{restaurante.tipo}</TextoSobreImagem>

            <Imgapressentacao
              src={restaurante.capa}
              alt={restaurante.titulo}
            />

            <TextoLadoce>{restaurante.titulo}</TextoLadoce>
          </Containerimgep>
        </Containerimg>

        {/* 🔥 passa a função */}
        <Pizzas adicionarAoCarrinho={adicionarAoCarrinho} />
      </LayoutContainer>

      <Footer />
    </Tudo>
  );
}

export default Perfil;