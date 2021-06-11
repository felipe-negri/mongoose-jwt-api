const { Router } = require('express');

// Middlewares
const auth       = require('./middlewares/auth');

// Controllers
const Cliente = require('./controllers/clienteController');
const Usuario = require('./controllers/usuarioController');

const routes = Router();

routes.post('/cliente', auth.verificaAcesso, Cliente.cadastro );
routes.post('/usuario', Usuario.cadastro);
routes.post('/login', Usuario.login);


module.exports = routes;