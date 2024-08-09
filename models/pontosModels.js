// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const Joi = require('joi');

// require('dotenv').config();

// const MONGO_ACCESS = process.env.MONGO_ACCESS;

// // mongoose.connect(MONGO_ACCESS, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true
// // })
// //   .then(() => console.log('Conectado ao MongoDB Atlas'))
// //   .catch(err => console.error('Erro ao conectar ao MongoDB Atlas:', err));

// mongoose.connect('mongodb://127.0.0.1/Auto', { useNewUrlParser: true }); 
  
// const PontoSchema = new Schema({
//   userId: {
//     type: Schema.Types.ObjectId,
//     ref: 'Cliente',
//     required: true
//   },
//   data: {
//     type: Date,
//     default: Date.now
//   },
//   tipo: {
//     type: String,
//     enum: ['entrada', 'saida'],
//     required: true
//   },
//   horaEntrada: {
//     type: String,
//   },
//   horaSaida: {
//     type: String,
//   },
//   horasDeServico: {
//     type: String,
//     default: function () {
//       if (this.tipo === 'saida' && this.horaEntrada) {
//         const horaEntrada = new Date(`2000-01-01T${this.horaEntrada}`);
//         const horaSaida = new Date(`2000-01-01T${this.horaSaida}`);
//         const diff = horaSaida - horaEntrada;
//         return (diff / (1000 * 60 * 60)).toFixed(2); // Convertendo milissegundos para horas e arredondando para duas casas decimais
//       }
//       return 0;
//     }
//   }
// });

// const PontoModel = mongoose.model('Ponto', PontoSchema);

// module.exports = PontoModel;
