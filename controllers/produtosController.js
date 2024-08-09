const Product = require('../models/produtosModels');

// Criar um novo produto
exports.createProduct = async (req, res) => {
    try {
      const products = Array.isArray(req.body) ? req.body : [req.body];
  
      // Criação e salvamento dos produtos
      const savedProducts = await Promise.all(
        products.map(async (productData) => {
          const product = new Product(productData);
          return product.save();
        })
      );
  
      // Retorno da resposta com os produtos salvos
      if (savedProducts.length === 1) {
        res.status(201).json(savedProducts[0]); // Retorna um único produto se a solicitação continha apenas um
      } else {
        res.status(201).json(savedProducts); // Retorna todos os produtos se a solicitação continha um array
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

// Obter todos os produtos
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obter um produto por ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Atualizar um produto por ID
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Deletar um produto por ID
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
