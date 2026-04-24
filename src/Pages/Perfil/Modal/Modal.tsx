import {
  Overlay,
  Content,
  Btnfechar,
  Header,
  Organizacao,
  TextoeBotoes,
  TextoTitulo,
  Textodescricao,
  BotaoComprar,
  ImagemProduto,
} from "../Modal/Styles";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add, open } from "../../../store/reducers/cart"; 

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  produtoId: number | null;
  restauranteId: number | null; 
};

type Produto = {
  foto: string;
  preco: number;
  id: number;
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

const Modal = ({ isOpen, onClose, produtoId, restauranteId }: ModalProps) => {
  const [produto, setProduto] = useState<Produto | null>(null);

  const dispatch = useDispatch(); 

  
  const handleAddToCart = () => {
    if (produto) {
      dispatch(add(produto)); 
      dispatch(open());       
    }
  };

  useEffect(() => {
    async function carregarProduto() {
      if (!isOpen || produtoId === null || restauranteId === null) return;

      try {
        const res = await fetch("https://api-ebac.vercel.app/api/efood/restaurantes");
        if (!res.ok) throw new Error(`Erro na API: ${res.status}`);

        const data: Restaurante[] = await res.json();
        const restaurante = data.find(r => r.id === restauranteId);
        if (restaurante) {
          const item = restaurante.cardapio.find(p => p.id === produtoId);
          setProduto(item || null);
        } else {
          setProduto(null);
        }
      } catch (err) {
        console.error("Erro ao carregar produto:", err);
        setProduto(null);
      }
    }

    carregarProduto();

    return () => setProduto(null);
  }, [isOpen, produtoId, restauranteId]);

  if (!isOpen) return null;

  return (
    <Overlay>
      <Content>
        <Header>
          <Btnfechar onClick={onClose}>X</Btnfechar>
        </Header>
        <Organizacao>
          {produto ? (
            <>
              <ImagemProduto src={produto.foto} alt={produto.nome} />
              <TextoeBotoes>
                <TextoTitulo>{produto.nome}</TextoTitulo>
                <Textodescricao>{produto.descricao}</Textodescricao>
                <Textodescricao>Serve: {produto.porcao}</Textodescricao>

                
                <BotaoComprar
                     onClick={() => {
                         handleAddToCart();
                          onClose(); 
                                     }}
                                    >
                    Adicionar ao carrinho -{" "}
                    {produto.preco.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </BotaoComprar>

              </TextoeBotoes>
            </>
          ) : (
            <p>Carregando...</p>
          )}
        </Organizacao>
      </Content>
    </Overlay>
  );
};

export default Modal;