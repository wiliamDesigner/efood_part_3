// CarditemcomponentSushi.tsx
import React, { useEffect, useState } from "react";
import {
  CardImageSushi,
  CardImageGroupSushi,
  CardSushiWrapper,
  NomedaComida,
  TipodeComida,
  DestaquedaSemana,
  DescricaodoPrato,
  SaibaMais,
  AvaliacaoNotas,
  LinhaDoTitulo,
  NotaComEstrela,
  ImageWrapper
} from "./styles";
import { CardItem } from "../Cardlista/styles";
import Estrela from "../../assets/estrela.png";
import { Link } from "react-router-dom";

type Produto = {
  id: number;
  foto: string;
  preco: number;
  nome: string;
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

const CarditemcomponentSushi: React.FC = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarRestaurantes() {
      try {
        const res = await fetch("https://api-ebac.vercel.app/api/efood/restaurantes");

        if (!res.ok) {
          throw new Error(`Erro na API: ${res.status}`);
        }

        const data: Restaurante[] = await res.json();
        setRestaurantes(data);
      } catch (err) {
        console.error("Erro ao carregar restaurantes:", err);
      } finally {
        setLoading(false);
      }
    }

    carregarRestaurantes();
  }, []);

  if (loading) {
    return <p>Carregando restaurantes...</p>;
  }

  if (restaurantes.length === 0) {
    return <p>Nenhum restaurante encontrado.</p>;
  }

  return (
    <CardImageGroupSushi>
      {restaurantes.map((restaurante) => (
        <CardSushiWrapper key={restaurante.id}>
          <ImageWrapper >
          <CardImageSushi src={restaurante.capa} alt={restaurante.titulo} />
          </ImageWrapper>

          {restaurante.destacado && (
            <DestaquedaSemana>Destaque da Semana</DestaquedaSemana>
          )}

          <TipodeComida>{restaurante.tipo}</TipodeComida>

          <CardItem>
            <LinhaDoTitulo>
              <NomedaComida>{restaurante.titulo}</NomedaComida>
              <NotaComEstrela>
                <AvaliacaoNotas>
                  {restaurante.avaliacao.toFixed(1)}
                </AvaliacaoNotas>
                <img src={Estrela} alt="estrela da nota" />
              </NotaComEstrela>
            </LinhaDoTitulo>

            <DescricaodoPrato>{restaurante.descricao}</DescricaodoPrato>

            <Link to={`/perfil/${restaurante.id}`}>
              <SaibaMais>Saiba mais</SaibaMais>
            </Link>
          </CardItem>
        </CardSushiWrapper>
      ))}
    </CardImageGroupSushi>
  );
};

export default CarditemcomponentSushi;
