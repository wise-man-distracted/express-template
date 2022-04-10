
// Importar o express
const express = require("express");

// Importar o ContatosController
const ContatosController = require('../controllers/ContatosController');
const verificaAdimplencia = require("../middlewares/verificaAdimplencia");
const verificaSeLogado = require("../middlewares/verificaSeLogado");

// Cria o roteador
const router = express.Router();

// Pede para o roteador definir uma rota: (método: get, endereço: /contatos)
router.get('/contatos', verificaSeLogado, verificaAdimplencia, ContatosController.listarContatos);
router.get('/contatos/:id', verificaSeLogado, verificaAdimplencia, ContatosController.capturarContato)

// Exportar o roteador
module.exports = router;