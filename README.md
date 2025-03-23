# Node.js API - Gerenciamento de Usuários e Produtos

Este é um projeto básico de API REST para gerenciamento de **usuários** e **produtos** utilizando **Node.js, Express e MongoDB** para a aula de Tecnologias Emergentes, 5° Semestre de Engenharia de Software.

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
O servidor rodará na porta `4040`. A API estará disponível em `http://localhost:4040/api`.

## 📌 Rotas da API

### **Usuários**

#### 1️⃣ Criar um usuário (POST)
- **URL:** `POST /api/user`
- **Body:**
```json
{
  "name": "João Silva",
  "email": "joao.silva@email.com",
  "password": "123456"
}
```

#### 2️⃣ Listar usuários (GET)
- **URL:** `GET /api/user`
- **Query Params (opcional):**  
  - `_page`: Número da página (ex: `?page=1`)
  - `_size`: Tamanho da página (ex: `?size=10`)

#### 3️⃣ Buscar um usuário (GET)
- **URL:** `GET /api/user/:id`

#### 4️⃣ Atualizar um usuário (PUT)
- **URL:** `PUT /api/user/:id`
- **Body:**
```json
{
  "name": "Maria Oliveira",
  "email": "maria.oliveira@email.com",
  "password": "novaSenha123"
}
```

#### 5️⃣ Deletar um usuário (DELETE)
- **URL:** `DELETE /api/user/:id`

---

### **Produtos**

#### 1️⃣ Criar um produto (POST)
- **URL:** `POST /api/product`
- **Body:**
```json
{
  "name": "Teclado Mecânico",
  "price": 299.99,
  "category": "Periféricos",
  "stock": 10
}
```

#### 2️⃣ Listar produtos (GET)
- **URL:** `GET /api/product`
- **Query Params (opcional):**  
  - `_page`: Número da página (ex: `?page=1`)
  - `_size`: Tamanho da página (ex: `?size=10`)

#### 3️⃣ Buscar um produto (GET)
- **URL:** `GET /api/product/:id`

#### 4️⃣ Atualizar um produto (PUT)
- **URL:** `PUT /api/product/:id`
- **Body:**
```json
{
  "name": "Teclado RGB",
  "price": 349.99,
  "category": "Periféricos",
  "stock": 8
}
```

#### 5️⃣ Deletar um produto (DELETE)
- **URL:** `DELETE /api/product/:id`

---

## 📌 Collection do Postman
Você pode importar a coleção do Postman para testar a API:  
[🔗 Link da Collection do Postman](https://documenter.getpostman.com/view/28679390/2sAYdoG8Aw)

## 📌 Licença
Este projeto é de código aberto e pode ser utilizado livremente.
