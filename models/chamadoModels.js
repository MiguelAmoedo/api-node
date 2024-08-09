// require('dotenv').config();
// const mongoose = require('mongoose');


// const Schema = mongoose.Schema;

// const ChamadoSchema = new Schema({
//   numero: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   cliente: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Cliente',
//     required: true
//   },
//   descricao: {
//     type: String,
//     required: true
//   },
//   ResumoDoTecnico: {
//     type: String,
 
//   },

//   status: {
//     type: String,
//    required: true

//   },
//   dataAbertura: {
//     type: Date,
//     default: Date.now
//   },
//   dataFechamento: {
//     type: Date
//   },
//   tecnicoResponsavel: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Funcionario'
//   }
// });

// const ChamadoModel = mongoose.model('Chamado', ChamadoSchema);

// module.exports = ChamadoModel;