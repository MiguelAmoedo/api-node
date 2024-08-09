// const ChamadoModel = require('../models/chamadoModels');
// const ClienteModel = require('../models//clienteModels');
// const FuncionarioModel = require('../models/funcionariosModels');


// async function gerarNumeroChamado() {
//   try {
//     // Encontre o último número de chamado no banco de dados
//     const ultimoChamado = await ChamadoModel.findOne().sort({ numero: -1 });

//     // Se não houver nenhum chamado no banco de dados ainda, comece com 1
//     if (!ultimoChamado) {
//       return 1;
//     }

//     // Incrementa o último número de chamado em 1 para obter o próximo número
//     return ultimoChamado.numero + 1;
//   } catch (error) {
//     throw error;
//   }
// }

// class ChamadoController {
//   async abrirChamado(clienteId, descricao) {
//     try {
//       // Verifica se o cliente existe
//       const cliente = await ClienteModel.findById(clienteId);
//       if (!cliente) {
//         throw new Error('Cliente não encontrado');
//       }
//       const numero = await gerarNumeroChamado();
//       const dataAbertura = Date.now();
//       // Cria o chamado
//       const chamado = new ChamadoModel({
//         numero,
//         cliente: clienteId,
//         descricao,
//         dataAbertura,
//         status: 'Aberto',
//         dataAbertura
//       });

//       // Salva o chamado no banco de dados
//       await chamado.save();
      
//       return chamado;
//     } catch (error) {
//       throw error;
//     }
//   }

//   async getAllChamados() {
//     try {
//       return await ChamadoModel.find();
//     } catch (error) {
//       throw error;
//     }
//   }

//   async getChamadoById(chamadoId) {
//     try {
//       return await ChamadoModel.findById(chamadoId);
//     } catch (error) {
//       throw error;
//     }
//   }

//   async aceitarChamado(chamadoId, funcionarioId) {
//     try {
//       const chamado = await ChamadoModel.findById(chamadoId);
//       if (!chamado) {
//         throw new Error('Chamado não encontrado');
//       }
      
//       const funcionario = await FuncionarioModel.findById(funcionarioId);
//       if (!funcionario) {
//         throw new Error('Funcionário não encontrado');
//       }

//       chamado.tecnicoResponsavel = funcionarioId;
//       await chamado.save();
      
//       return chamado;
//     } catch (error) {
//       throw error;
//     }
//   }

//   async editarChamado(chamadoId, novoResumo) {
//     try {
//       const chamado = await ChamadoModel.findById(chamadoId);
//       if (!chamado) {
//         throw new Error('Chamado não encontrado');
//       }

//       chamado.ResumoDoTecnico = novoResumo;
//       await chamado.save();
      
//       return chamado;
//     } catch (error) {
//       throw error;
//     }
//   }

//   async cancelarChamado(chamadoId) {
//     try {
//       const chamado = await ChamadoModel.findById(chamadoId);
//       if (!chamado) {
//         throw new Error('Chamado não encontrado');
//       }

//       await ChamadoModel.findByIdAndDelete(chamadoId);
      
//       return chamado;
//     } catch (error) {
//       throw error;
//     }
//   }

//   async getChamadosDoCliente(clienteId) {
//     try {
//       return await ChamadoModel.find({ cliente: clienteId });
//     } catch (error) {
//       throw error;
//     }
//   }

//   async cancelarChamadoDoCliente(chamadoId, clienteId) {
//     try {
//       const chamado = await ChamadoModel.findById(chamadoId);
//       if (!chamado) {
//         throw new Error('Chamado não encontrado');
//       }

//       if (chamado.cliente.toString() !== clienteId) {
//         throw new Error('Este chamado não pertence a este cliente');
//       }

//       await ChamadoModel.findByIdAndDelete(chamadoId);
      
//       return chamado;
//     } catch (error) {
//       throw error;
//     }
//   }
// }

// module.exports = new ChamadoController();
