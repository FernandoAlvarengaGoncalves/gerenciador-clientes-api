Gerenciador de Clientes - API
Este projeto é uma aplicação fullstack para gerenciar clientes (cadastro, edição, listagem e exclusão), utilizando Node.js com Express no backend, MySQL como banco de dados, HTML e Bootstrap no frontend, e Axios para realizar as requisições HTTP.

Para executar o projeto localmente, siga os passos abaixo:

1. Clone este repositório com o comando: git clone https://github.com/FernandoAlvarengaGoncalves/gerenciador-clientes-api.git e entre na pasta do projeto com cd gerenciador-clientes-api.

2. Instale as dependências com o comando: npm install.

3. Configure o banco de dados. Acesse seu MySQL (pode ser via Workbench, terminal ou phpMyAdmin) e execute os comandos abaixo:

CREATE DATABASE DATABASE10;

USE DATABASE10;

CREATE TABLE clientes (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(255),
rg VARCHAR(20),
cpf VARCHAR(20),
idade INT
);

4. Inicie o servidor com o comando: npm start. O servidor será iniciado na porta 3019.

5. Para acessar a interface do sistema, abra o arquivo index.html no navegador. Você também pode utilizar a extensão Live Server no VSCode para facilitar o processo.

As rotas da API disponíveis são:

GET /api/clientes → Lista todos os clientes

POST /api/clientes → Cadastra um novo cliente

PUT /api/clientes/:id → Atualiza um cliente existente

DELETE /api/clientes/:id → Remove um cliente do sistema

Autor: Fernando Alvarenga Gonçalves
GitHub: https://github.com/FernandoAlvarengaGoncalves

Este projeto foi desenvolvido para fins acadêmicos e está disponível para uso e aprendizado.