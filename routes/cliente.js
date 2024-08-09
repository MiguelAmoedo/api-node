// const express = require('express');
// const router = express.Router();
// const clienteController = require('../controllers/clienteControler');

// // Rota para criar um novo cliente
// router.post('/', async (req, res) => {
//   try {
//     const novoCliente = await clienteController.criarCliente(req.body);
//     res.status(201).json(novoCliente);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


// router.post('/login', async (req, res) => {
//   try {
//     const { cpf, senha } = req.body;
//     const cliente = await clienteController.fazerLogin(cpf, senha);
//     res.status(200).json(cliente);
//   } catch (error) {
//     res.status(401).json({ error: error.message });
//   }
// });

// // Rota para obter todos os clientes
// router.get('/', async (req, res) => {
//   try {
//     const clientes = await clienteController.buscarTodosClientes();
//     res.status(200).json(clientes);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Rota para obter um cliente por ID
// router.get('/:id', async (req, res) => {
//   try {
//     const cliente = await clienteController.buscarClientePorId(req.params.id);
//     if (!cliente) {
//       return res.status(404).json({ message: 'Cliente não encontrado' });
//     }
//     res.status(200).json(cliente);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Rota para atualizar um cliente
// router.put('/:id', async (req, res) => {
//   try {
//     const clienteAtualizado = await clienteController.atualizarCliente(req.params.id, req.body);
//     res.status(200).json(clienteAtualizado);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Rota para excluir um cliente
// router.delete('/:id', async (req, res) => {
//   try {
//     const clienteExcluido = await clienteController.excluirCliente(req.params.id);
//     res.status(200).json(clienteExcluido);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;
