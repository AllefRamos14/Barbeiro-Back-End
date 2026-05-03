# 🧾 Barbeiro API

API REST para gerenciamento de serviços de barbearia, incluindo autenticação, cadastro de serviços e controle administrativo.

Desenvolvida com foco em organização, segurança e escalabilidade.

---

## ✨ Funcionalidades

- 🔐 Autenticação com JWT
- 👤 Cadastro e login de usuários/admin
- ✂️ CRUD de serviços
- 📊 Estrutura pronta para expansão (dashboard, relatórios)
- 🔒 Criptografia de senha com bcrypt
- 🌐 API RESTful

---

## 🛠️ Tecnologias utilizadas

- Node.js
- Express
- Prisma ORM
- MongoDB
- JWT (jsonwebtoken)
- bcryptjs
- dotenv

---

## 📦 Scripts disponíveis

```bash
yarn dev      # ambiente de desenvolvimento (nodemon)
yarn start    # produção
yarn build    # gera prisma client
yarn seed     # popula banco com dados iniciais
