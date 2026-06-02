# eFood

Projeto de uma aplicação web de delivery de restaurantes, desenvolvida em React com TypeScript. A aplicação permite visualizar restaurantes, acessar o perfil de um restaurante, consultar itens do cardápio, adicionar produtos ao carrinho e finalizar um pedido com dados de entrega e pagamento.

## Funcionalidades

- Página inicial com apresentação da marca e lista de restaurantes.
- Página de perfil do restaurante com imagem de capa, categoria e cardápio.
- Modal de detalhes do produto com descrição, porção e preço.
- Carrinho lateral com listagem de itens adicionados e valor total.
- Remoção de produtos do carrinho.
- Formulário de entrega com validação de campos obrigatórios.
- Formulário de pagamento com validação de dados do cartão.
- Envio do pedido para a API de checkout.
- Tela de confirmação com número do pedido.

## Tecnologias utilizadas

- React
- TypeScript
- React Router DOM
- Redux Toolkit
- React Redux
- RTK Query
- Styled Components
- Axios
- Create React App

## Integração com API

O projeto consome a API pública da EBAC:

```txt
https://api-ebac.vercel.app/api/efood
```

Principais endpoints usados:

- `GET /restaurantes`: carrega os restaurantes e seus cardápios.
- `POST /checkout`: envia os dados do pedido, entrega e pagamento.

## Estrutura do projeto

```txt
src/
  assets/              Imagens usadas na interface
  components/          Componentes reutilizáveis da aplicação
  Pages/               Páginas principais, como Home e Perfil
  services/            Configuração da API
  store/               Configuração do Redux e reducer do carrinho
  App.tsx              Componente principal
  routes.jsx           Configuração das rotas
  index.tsx            Entrada da aplicação
```

## Rotas

| Rota | Descrição |
| --- | --- |
| `/` | Página inicial |
| `/Perfil/:id` | Perfil de um restaurante específico |

## Como executar o projeto

Antes de começar, é necessário ter o Node.js instalado.

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm start
```

3. Acesse no navegador:

```txt
http://localhost:3000
```

## Scripts disponíveis

```bash
npm start
```

Executa a aplicação em modo de desenvolvimento.

```bash
npm run build
```

Gera a versão de produção na pasta `build`.

```bash
npm test
```

Executa os testes em modo interativo.

```bash
npm run eject
```

Remove a configuração padrão do Create React App. Use apenas se realmente necessário.

## Deploy

O projeto possui arquivos de configuração para publicação em plataformas como Vercel e Netlify:

- `vercel.json`
- `netlify.toml`
- `public/_redirects`

Essas configurações redirecionam as rotas para o `index.html`, permitindo que o React Router funcione corretamente em produção.

## Observações

- O carrinho é controlado pelo Redux Toolkit.
- Os estilos são criados com Styled Components.
- O checkout envia os dados para a API da EBAC e retorna um número de pedido.
- Algumas telas carregam dados diretamente da API de restaurantes.
