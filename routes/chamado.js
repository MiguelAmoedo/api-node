// const express = require('express');
// const router = express.Router();
// const chamadoController = require('../controllers/chamadoController');

// // Rota para abrir um novo chamado
// router.post('/', async (req, res) => {
//   try {
//     const { clienteId, descricao } = req.body;
//     const novoChamado = await chamadoController.abrirChamado(clienteId, descricao);
//     res.status(201).json(novoChamado);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Rota para obter todos os chamados
// router.get('/', async (req, res) => {
//   try {
//     const chamados = await chamadoController.getAllChamados();
//     res.status(200).json(chamados);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Rota para obter um chamado por ID
// router.get('/:id', async (req, res) => {
//   try {
//     const chamado = await chamadoController.getChamadoById(req.params.id);
//     if (!chamado) {
//       return res.status(404).json({ message: 'Chamado não encontrado' });
//     }
//     res.status(200).json(chamado);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Rota para um funcionário aceitar um chamado
// router.put('/:id/aceitar', async (req, res) => {
//   try {
//     const chamado = await chamadoController.aceitarChamado(req.params.id, req.body.funcionarioId);
//     res.status(200).json(chamado);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Rota para um funcionário editar um chamado
// router.put('/:id', async (req, res) => {
//   try {
//     const chamado = await chamadoController.editarChamado(req.params.id, req.body.resumo);
//     res.status(200).json(chamado);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Rota para um funcionário cancelar um chamado
// router.delete('/:id', async (req, res) => {
//   try {
//     const chamado = await chamadoController.cancelarChamado(req.params.id);
//     res.status(200).json(chamado);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Rota para um cliente verificar seus próprios chamados
// router.get('/cliente/:clienteId', async (req, res) => {
//   try {
//     const chamadosDoCliente = await chamadoController.getChamadosDoCliente(req.params.clienteId);
//     res.status(200).json(chamadosDoCliente);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Rota para um cliente cancelar seu próprio chamado
// router.delete('/cliente/:chamadoId', async (req, res) => {
//   try {
//     const chamadoCancelado = await chamadoController.cancelarChamadoDoCliente(req.params.chamadoId, req.body.clienteId);
//     res.status(200).json(chamadoCancelado);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;
