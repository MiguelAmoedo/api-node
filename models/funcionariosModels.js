// const mongoose = require('mongoose');

// require('dotenv').config();

// const MONGO_ACCESS = process.env.MONGO_ACCESS;

// // mongoose.connect(MONGO_ACCESS, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true
// // })
// //   .then(() => console.log('Conectado ao MongoDB Atlas'))
// //   .catch(err => console.error('Erro ao conectar ao MongoDB Atlas:', err));

// mongoose.connect('mongodb://127.0.0.1/Auto', { useNewUrlParser: true }); 

// const Schema = mongoose.Schema;

// const FuncionarioSchema = new Schema({
//   nome: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   cargo: String,
//   departamento: String,
//   salario: Number,
//   dataContratacao: {
//     type: Date,
//     required: true
//   },
//   dataNascimento: Date,
//   endereco: {
//     rua: String,
//     cidade: String,
//     estado: String,
//     cep: String
//   }
// });

// const FuncionarioModel = mongoose.model('Funcionario', FuncionarioSchema);

// module.exports = FuncionarioModel;