const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/compraController');

// Rota para criar uma nova compra
router.post('/', purchaseController.createPurchase);

// Rota para obter todas as compras
router.get('/', purchaseController.getAllPurchases);

// Rota para obter uma compra por ID
router.get('/:id', purchaseController.getPurchaseById);

// Rota para atualizar uma compra
router.put('/:id', purchaseController.updatePurchase);

// Rota para excluir uma compra
router.delete('/:id', purchaseController.deletePurchase);

module.exports = router;
