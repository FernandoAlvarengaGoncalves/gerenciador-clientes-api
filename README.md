# 💼 Gerenciador de Clientes - API

Este projeto é uma aplicação fullstack para gerenciar clientes (**cadastro**, **edição**, **listagem** e **exclusão**), utilizando:

-  Node.js com Express no backend  
-  MySQL como banco de dados  
-  HTML + Bootstrap no frontend  
-  Axios para requisições HTTP  

---

##  Como executar o projeto localmente

### 1. Clone este repositório:

```bash
git clone https://github.com/FernandoAlvarengaGoncalves/gerenciador-clientes-api.git
cd gerenciador-clientes-api
```

### 2. Instale as dependências:

```bash
npm install
```

### 3. Configure o banco de dados:

Acesse seu MySQL (via Workbench, terminal ou phpMyAdmin) e execute os comandos abaixo:

```sql
CREATE DATABASE DATABASE10;

USE DATABASE10;

CREATE TABLE clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  rg VARCHAR(20),
  cpf VARCHAR(20),
  idade INT
);
```

### 4. Inicie o servidor:

```bash
npm start
```

> O servidor será iniciado na porta `3019`.

### 5. Acesse a interface:

Abra o arquivo `index.html` no navegador.  
Se preferir, use a extensão **Live Server** do VSCode para facilitar.

---

##  Rotas da API

| Método | Rota                  | Descrição                  |
|--------|-----------------------|----------------------------|
| GET    | `/api/clientes`       | Lista todos os clientes    |
| POST   | `/api/clientes`       | Cadastra um novo cliente   |
| PUT    | `/api/clientes/:id`   | Atualiza um cliente        |
| DELETE | `/api/clientes/:id`   | Remove um cliente do sistema |

---

##  Autor

**Fernando Alvarenga Gonçalves**  
 [GitHub](https://github.com/FernandoAlvarengaGoncalves)

---

##  Licença

Este projeto foi desenvolvido para fins acadêmicos e pessoais e está disponível para uso e aprendizado.
