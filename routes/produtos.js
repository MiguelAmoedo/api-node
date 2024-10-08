const express = require('express');
const router = express.Router();
const productController = require('../controllers/produtosController');

router.post('/products', productController.createProduct);
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/a/:id', productController.deleteProduct);

module.exports = router;
