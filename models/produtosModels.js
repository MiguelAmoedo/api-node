const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');

require('dotenv').config();

const MONGO_ACCESS = process.env.MONGO_ACCESS;

mongoose.connect(MONGO_ACCESS, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Conectado ao MongoDB Atlas'))
  .catch(err => console.error('Erro ao conectar ao MongoDB Atlas:', err));


  
const ProductSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    preco: { type: Number, required: true },
    quantidade: { type: Number, required: true },
    imagem: { type: String, required: false },
    categoria: { type: String, required: true },
    dataCadastro: { type: Date, default: Date.now },
  });

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
