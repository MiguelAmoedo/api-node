// const express = require('express');
// const router = express.Router();
// const funcionarioController = require('../controllers/funcionarioController');

// // Rota para criar um novo funcionário
// router.post('/', async (req, res) => {
//   try {
//     const novoFuncionario = await funcionarioController.criarFuncionario(req.body);
//     res.status(201).json(novoFuncionario);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Rota para obter todos os funcionários
// router.get('/', async (req, res) => {
//   try {
//     const funcionarios = await funcionarioController.buscarTodosFuncionarios();
//     res.status(200).json(funcionarios);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Rota para obter um funcionário por ID
// router.get('/:id', async (req, res) => {
//   try {
//     const funcionario = await funcionarioController.buscarFuncionarioPorId(req.params.id);
//     if (!funcionario) {
//       return res.status(404).json({ message: 'Funcionário não encontrado' });
//     }
//     res.status(200).json(funcionario);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Rota para atualizar um funcionário
// router.put('/:id', async (req, res) => {
//   try {
//     const funcionarioAtualizado = await funcionarioController.atualizarFuncionario(req.params.id, req.body);
//     res.status(200).json(funcionarioAtualizado);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Rota para excluir um funcionário
// router.delete('/:id', async (req, res) => {
//   try {
//     const funcionarioExcluido = await funcionarioController.excluirFuncionario(req.params.id);
//     res.status(200).json(funcionarioExcluido);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;
