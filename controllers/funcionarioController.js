// const FuncionarioModel = require('../models/funcionariosModels');

// class FuncionarioController {
//   async criarFuncionario(funcionarioData) {
//     try {
//       const funcionario = new FuncionarioModel(funcionarioData);
//       await funcionario.save();
//       return funcionario;
//     } catch (error) {
//       throw error;
//     }
//   }

//   async buscarTodosFuncionarios() {
//     try {
//       return await FuncionarioModel.find();
//     } catch (error) {
//       throw error;
//     }
//   }

//   async buscarFuncionarioPorId(funcionarioId) {
//     try {
//       return await FuncionarioModel.findById(funcionarioId);
//     } catch (error) {
//       throw error;
//     }
//   }

//   async atualizarFuncionario(funcionarioId, novosDados) {
//     try {
//       const funcionario = await FuncionarioModel.findByIdAndUpdate(funcionarioId, novosDados, { new: true });
//       return funcionario;
//     } catch (error) {
//       throw error;
//     }
//   }

//   async excluirFuncionario(funcionarioId) {
//     try {
//       return await FuncionarioModel.findByIdAndDelete(funcionarioId);
//     } catch (error) {
//       throw error;
//     }
//   }
// }

// module.exports = new FuncionarioController();
