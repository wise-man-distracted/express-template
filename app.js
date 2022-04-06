
// Importar o express
const express = require('express');
const marcaEntradaDeRequisicao = require('./middlewares/marcaEntradaDeRequisicao');
const session = require('express-session')

// Importar os roteadores
const ContatosRouter = require('./routes/ContatosRouter');
const UsuariosRouter = require('./routes/UsuariosRouter');

// Criar um servidor/aplicação com o express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));
// app.use(marcaEntradaDeRequisicao)
// Configurar o ejs como um template engine

app.set('view engine', 'ejs')

app.use(session({
    secret: "screto",
    resave: false,
    saveUninitialized: false
}))

// Criar rota get no endereço '/' para responder requisição com msg "olá"
app.get('/', (req, res)=>{
    res.send("Olá");
});

// Usando os roteadores
app.use('/', ContatosRouter);
// Usando os roteadores
app.use('/', UsuariosRouter);

// Levantar/rodar/executar a nossa aplicação
app.listen(3000, ()=>{console.log("Aplicação escutando a porta 3000")} );