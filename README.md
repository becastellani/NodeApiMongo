# Node.js API - Gerenciamento de Usuários

Este é um projeto básico de API REST para gerenciamento de usuários utilizando **Node.js, Express e MongoDB** para a aula de Tecnologias Emergentes, 5° Semestre de Engenharia de Software

## 🚀 Tecnologias Utilizadas
- Node.js
- Express.js
- MongoDB (Mongoose)
- Dotenv
- Morgan
- Helmet
- Cors
- HTTP Status Codes

## 📌 Como Rodar o Projeto

### 1️⃣ Clone o repositório
```sh
git clone https://github.com/becastellani/NodeApiMongo.git
cd nome-do-repositorio
```

### 2️⃣ Instale as dependências
```sh
npm install
```

### 3️⃣ Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto e adicione:
```sh
PORT=4040
DATABASE=mongodb+srv://seu_usuario:senha@seu_cluster.mongodb.net/seu_banco
```

### 4️⃣ Inicie o servidor
O servidor rodará na porta `4040`. A API estará disponível em `http://localhost:4040/api/user`.

## 📌 Rotas da API

### 1️⃣ Criar um usuário (POST)
- **URL:** `POST /api/user`
- **Body:**
```json
{
  "name": "João Silva",
  "email": "joao.silva@email.com",
  "password": "123456"
}
```

### 2️⃣ Listar usuários (GET)
- **URL:** `GET /api/user`

### 3️⃣ Atualizar parcialmente um usuário (PATCH)
- **URL:** `PATCH /api/user/:id`
- **Body:**
```json
{
  "name": "João Souza"
}
```

### 4️⃣ Substituir um usuário inteiro (PUT)
- **URL:** `PUT /api/user/:id`
- **Body:**
```json
{
  "name": "Maria Oliveira",
  "email": "maria.oliveira@email.com",
  "password": "novaSenha123"
}
```

### 5️⃣ Deletar um usuário (DELETE)
- **URL:** `DELETE /api/user/:id`

## 📌 Collection do Postman
Você pode importar a coleção do Postman para testar a API:  
[🔗 Link da Collection do Postman](https://documenter.getpostman.com/view/28679390/2sAYdoG8Aw)

## 📌 Licença
Este projeto é de código aberto e pode ser utilizado livremente.
