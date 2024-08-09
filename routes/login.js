const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota de cadastro
router.post('/register', userController.register);

// Rota de login
router.post('/login', userController.login);

// Rota para atualizar os dados de um usuário
router.put('/:id', userController.updateUser);

// Rota para buscar um usuário por ID
router.get('/:id', userController.getUserById);


module.exports = router;
