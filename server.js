// Importando as bibliotecas necessárias
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const PORT = 3019;

// Configurando o CORS e o body parser
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Configuração da conexão com o banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Fernas238117@',
    database: 'DATABASE10'
});

// Conectando ao banco de dados
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão com o banco de dados estabelecida');
});

// Rota para a raiz
app.get('/', (req, res) => {
    res.send('Bem-vindo à sua aplicação!');
});

// Rotas para o CRUD de clientes

// CREATE: Adiciona um novo cliente
app.post('/api/clientes', (req, res) => {
    const { nome, rg, cpf, idade } = req.body;
    const query = 'INSERT INTO clientes (nome, rg, cpf, idade) VALUES (?, ?, ?, ?)';
    db.query(query, [nome, rg, cpf, idade], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao adicionar cliente' });
            return;
        }
        res.status(201).json({ message: 'Cliente adicionado com sucesso' });
    });
});

// READ: Obtém todos os clientes
app.get('/api/clientes', (req, res) => {
    const query = 'SELECT * FROM clientes';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao obter clientes' });
            return;
        }
        res.json(results);
    });
});

// Rota para obter um cliente por ID
app.get('/api/clientes/:id', (req, res) => {
    const { id } = req.params; // Pega o ID da URL
    const query = 'SELECT * FROM clientes WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao obter cliente' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'Cliente não encontrado' });
            return;
        }
        res.json(results[0]);
    });
});

// UPDATE: Atualiza um cliente existente
app.put('/api/clientes/:id', (req, res) => {
    const { id } = req.params; // Pega o ID da URL
    const { nome, rg, cpf, idade } = req.body;
    const query = 'UPDATE clientes SET nome = ?, rg = ?, cpf = ?, idade = ? WHERE id = ?';
    db.query(query, [nome, rg, cpf, idade, id], (err) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao atualizar cliente' });
            return;
        }
        res.json({ message: 'Cliente atualizado com sucesso' });
    });
});

// DELETE: Remove um cliente
app.delete('/api/clientes/:id', (req, res) => {
    const { id } = req.params; // Pega o ID da URL
    const query = 'DELETE FROM clientes WHERE id = ?';
    db.query(query, [id], (err) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao remover cliente' });
            return;
        }
        res.json({ message: 'Cliente removido com sucesso' });
    });
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});