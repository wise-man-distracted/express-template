// Importar o express
const express = require("express");

// Importar o ContatosController
const UsuariosController = require('../controllers/UsuariosController');

// Cria o roteador
const router = express.Router();

// Pede para o roteador definir uma rota: (método: get, endereço: /contatos)
router.get('/registrar', UsuariosController.showRegistrar);
router.post('/usuarios', UsuariosController.store);
router.get('/login', UsuariosController.mostrarLogin)
router.post('/login', UsuariosController.login)

// Exportar o roteador
module.exports = router;