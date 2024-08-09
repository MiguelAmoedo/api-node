// const ClienteModel = require('../models/clienteModels');

// class ClienteController {
//   async criarCliente(clienteData) {
//     try {
//       const cliente = new ClienteModel(clienteData);
//       await cliente.save();
//       return cliente;
//     } catch (error) {
//       throw error;
//     }
//   }

//   async buscarTodosClientes() {
//     try {
//       return await ClienteModel.find();
//     } catch (error) {
//       throw error;
//     }
//   }

//   async buscarClientePorId(clienteId) {
//     try {
//       return await ClienteModel.findById(clienteId);
//     } catch (error) {
//       throw error;
//     }
//   }

//   async atualizarCliente(clienteId, novosDados) {
//     try {
//       const cliente = await ClienteModel.findByIdAndUpdate(clienteId, novosDados, { new: true });
//       return cliente;
//     } catch (error) {
//       throw error;
//     }
//   }

//   async excluirCliente(clienteId) {
//     try {
//       return await ClienteModel.findByIdAndDelete(clienteId);
//     } catch (error) {
//       throw error;
//     }
//   }

//   async fazerLogin(cpf, senha) {
//     try {
//       const cliente = await ClienteModel.findOne({ cpf, senha });
//       if (!cliente) {
//         throw new Error('CPF ou senha incorretos.');
//       }
//       return cliente;
//     } catch (error) {
//       throw error;
//     }
//   }
  
// }

// module.exports = new ClienteController();
