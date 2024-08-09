// const mongoose = require('mongoose');




// const Schema = mongoose.Schema;

// const ClienteSchema = new Schema({
//   nome: {
//     type: String,
//     required: true
//   },
//   sobrenome: {
//     type: String,
//   },
//   cpf: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   postoGraduacao: {
//     type: String,
//     required: true,
//     default: "Soldado"
//   },
//   organizacao: {
//     type: String,
//     required: true,
//   },
//   quadro: {
//     type: String,
//     required: true,
//     default: "QPPM"
//   },
//   pracas: {
//     type: String,
//     required: true,
//     default: "praças"
//   },
//   foto: {
//     type: String,
//   },
//   guarnicao: {
//     type: String,
//     required: true,
//   },
//   telefone: {
//     required: true,
//     type: String,
//   },
//   senha: {
//     required: true,
//     type: String,
//   },
//   dataCadastro: {
//     type: Date,
//     default: Date.now
//   },
//   status: {
//     type: Boolean,
//   }
// });


// const ClienteModel = mongoose.model('Cliente', ClienteSchema);

// module.exports = ClienteModel;