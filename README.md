<div align="center">

<img src="https://img.shields.io/badge/status-em%20desenvolvimento-brightgreen?style=for-the-badge" />
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" />
<img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
<img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" />

<br />
<br />

```
  ✂️  BARBEIRO API
      REST API para gestão de serviços de barbearia
```

</div>

---

## 📌 Sobre o projeto

**Barbeiro API** é uma API REST robusta para **gerenciamento completo de serviços de barbearia**, incluindo autenticação segura, cadastro de usuários e controle administrativo de serviços.

Desenvolvida com foco em **organização, segurança e escalabilidade**, serve como backend para o [The Blade & Comb](https://github.com/AllefRamos14) — aplicação web de agendamentos.

---

## ✨ Funcionalidades

| Recurso | Descrição |
|---|---|
| 🔐 Autenticação JWT | Login seguro com tokens de acesso e refresh |
| 👤 Gestão de usuários | Cadastro, login e controle de permissões (admin/cliente) |
| ✂️ CRUD de serviços | Criar, listar, editar e remover serviços da barbearia |
| 🔒 Senha criptografada | Hash seguro com bcryptjs |
| 🌐 API RESTful | Endpoints padronizados com respostas em JSON |
| 📊 Estrutura escalável | Pronta para dashboard, relatórios e novas features |

---

## 🛠️ Stack tecnológica

| Tecnologia | Função |
|---|---|
| **Node.js** | Runtime JavaScript server-side |
| **Express** | Framework HTTP para criação das rotas |
| **Prisma ORM** | Modelagem e acesso ao banco de dados |
| **MongoDB** | Banco de dados NoSQL |
| **jsonwebtoken** | Geração e validação de tokens JWT |
| **bcryptjs** | Criptografia de senhas |
| **dotenv** | Gerenciamento de variáveis de ambiente |

---

## 📁 Estrutura do projeto

```
barbeiro-api/
├── prisma/
│   ├── schema.prisma       # Modelos do banco de dados
│   └── seed.js             # Script de seed inicial
├── src/
│   ├── controllers/        # Lógica das requisições
│   ├── middlewares/        # Auth, validação, erros
│   ├── routes/             # Definição dos endpoints
│   ├── services/           # Regras de negócio
│   └── server.js           # Entry point
├── .env.example
├── package.json
└── README.md
```

> ⚠️ Ajuste conforme a estrutura real do seu projeto.

---

## 🔗 Endpoints principais

### Auth

```
POST   /auth/register     # Cadastro de usuário
POST   /auth/login        # Login e geração do token JWT
```

### Serviços

```
GET    /services          # Lista todos os serviços
GET    /services/:id      # Busca serviço por ID
POST   /services          # Cria novo serviço (admin)
PUT    /services/:id      # Atualiza serviço (admin)
DELETE /services/:id      # Remove serviço (admin)
```

> 🔒 Rotas marcadas com **(admin)** exigem token JWT com permissão de administrador.

---

## ⚙️ Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [Yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local ou Atlas)

### 🔹 1. Clonar o repositório

```bash
git clone https://github.com/AllefRamos14/Barbeiro-Back-End.git
cd barbeiro-api
```

### 🔹 2. Instalar dependências

```bash
yarn install
```

### 🔹 3. Configurar variáveis de ambiente

```bash
cp .env.example .env
```

Preencha o `.env` com suas configurações:

```env
DATABASE_URL="mongodb+srv://usuario:senha@cluster.mongodb.net/barbeiro"
JWT_SECRET="sua_chave_secreta_aqui"
JWT_EXPIRES_IN="7d"
PORT=3333
```

### 🔹 4. Gerar o Prisma Client e aplicar o schema

```bash
yarn build
```

### 🔹 5. Popular o banco com dados iniciais (opcional)

```bash
yarn seed
```

### 🔹 6. Iniciar em desenvolvimento

```bash
yarn dev
```

A API estará disponível em: `https://barbeiro-back-end.onrender.com`

---

## 📦 Scripts disponíveis

```bash
yarn dev      # Inicia em modo desenvolvimento com nodemon
yarn start    # Inicia em modo produção
yarn build    # Gera o Prisma Client
yarn seed     # Popula o banco com dados iniciais
```

---

## 🔐 Autenticação

Esta API utiliza **JWT (JSON Web Token)** para autenticação. Após o login, inclua o token no header de todas as requisições protegidas:

```http
Authorization: Bearer <seu_token_jwt>
```

**Exemplo com Axios:**

```js
axios.get('/services', {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
```

---

## 🚀 Deploy

### Variáveis necessárias em produção

```env
DATABASE_URL=
JWT_SECRET=
JWT_EXPIRES_IN=
PORT=
NODE_ENV=production
```

> Recomendamos o uso de **Railway**, **Render** ou **Fly.io** para hospedagem da API Node.js com MongoDB Atlas.

---

## 🤝 Contribuindo

1. Faça um **fork** do projeto
2. Crie uma branch: `git checkout -b feature/minha-feature`
3. Commit: `git commit -m 'feat: minha nova feature'`
4. Push: `git push origin feature/minha-feature`
5. Abra um **Pull Request**

> Este projeto segue o padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/).

---


<div align="center">

Feito com ❤️ e ☕ por **[Seu Nome](https://github.com/AllefRamos14)**

⭐ Se esse projeto te ajudou, deixa uma estrela!

</div>
