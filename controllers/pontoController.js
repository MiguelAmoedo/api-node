// const Ponto = require('../models/pontosModels');
// const moment = require('moment-timezone');

// class PontoController {
//   static getCurrentTime() {
//     return moment().tz('America/Sao_Paulo');
//   }
  
//   static async getAllPontos(req, res) {
//     try {
//       const pontos = await Ponto.find();
//       if (pontos.length === 0) {
//         res.status(400).json({ error: 'Não há pontos.' });
//       }
//       res.json(pontos);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Erro interno do servidor.' });
//     }
//   }
  

//   static async getPontoById(req, res) {
//     const { clienteId } = req.params;
//     try {
//       const pontos = await Ponto.find({ clienteId });
//       if (pontos.length === 0) {
//         return res.json({ message: 'Não há pontos para este usuário.' });
//       }
//       res.json(pontos);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Erro interno do servidor.' });
//     }
//   }
  

  
 
    
  
// static async iniciarPonto(req, res) {
//   const { clienteId } = req.params;

//   try {
//     const hoje = PontoController.getCurrentTime();
//     const data = hoje.format('YYYY-MM-DD');
//     const hora = hoje.format('HH:mm:ss');

//     const inicioDia = hoje.startOf('day');
//     const fimDia = hoje.endOf('day');

//     // Verifica se já existe um ponto aberto para este cliente hoje
//     const pontoAberto = await Ponto.findOne({
//       userId: clienteId,
//       tipo: 'entrada',
//       data,
//       hora: { $gte: inicioDia, $lte: fimDia }
//     });

//     if (pontoAberto) {
//       return res.status(400).json({ error: 'Já existe um ponto em aberto para este cliente hoje.' });
//     }

//     // Verifica se já existe um ponto aberto para este cliente hoje
//     const pontoAbertoOutroCliente = await Ponto.findOne({
//       userId: clienteId,
//       tipo: 'entrada',
//     });

//     if (pontoAbertoOutroCliente) {
//       return res.status(400).json({ error: 'Já existe um ponto em aberto para outro cliente hoje.' });
//     }

//     // Registra a entrada
//     await Ponto.create({
//       userId: clienteId,
//       tipo: 'entrada',
//       data,
//       hora,
//       horaEntrada: hora,
//       segundos: 0,
//       minutos: 0,
//       horas: 0
//     });

//     res.status(201).json({ message: 'Ponto iniciado com sucesso.' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Erro interno do servidor.' });
//   }
// }

// static async fecharPonto(req, res) {
//   const { clienteId } = req.params;

//   try {
//     const hoje = PontoController.getCurrentTime();
//     const hora = hoje.format('HH:mm:ss');

//     // Encontra o último ponto em aberto para este cliente
//     const pontoAberto = await Ponto.findOne({
//       userId: clienteId,
//       tipo: 'entrada',

//     });

//     if (!pontoAberto) {
//       return res.status(400).json({ error: 'Não existe um ponto em aberto para este cliente.' });
//     }

//     // Atualiza a hora de saída do ponto em aberto
//     pontoAberto.horaSaida = hora;

//     // Calcula o tempo de serviço em segundos
//     const horaEntrada = moment(pontoAberto.horaEntrada, 'HH:mm:ss');
//     const horaSaida = moment(hora, 'HH:mm:ss');
//     const diff = horaSaida.diff(horaEntrada, 'seconds');

//     // Converte o tempo de serviço para o formato hh:mm:ss
//     const horas = Math.floor(diff / 3600);
//     const minutos = Math.floor((diff % 3600) / 60);
//     const segundos = diff % 60;

//     pontoAberto.horasDeServico = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

//     // Atualiza o tipo para 'saida'
//     pontoAberto.tipo = 'saida';

//     await pontoAberto.save();

//     res.status(200).json({ message: 'Ponto fechado com sucesso.', horasDeServico: pontoAberto.horasDeServico });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Erro interno do servidor.' });
//   }
// }

// static async primeiroPontoUltimoFechado(req, res) {
//   try {
//     const { clienteId, data } = req.params;

//     const primeiroPonto = await Ponto.findOne({
//       userId: clienteId,
//       data,
//       tipo: 'entrada'
//     }).sort({ hora: 1 });

//     const ultimoPontoFechado = await Ponto.findOne({
//       userId: clienteId,
//       data,
//       tipo: 'saida'
//     }).sort({ hora: -1 });

//     if (ultimoPontoFechado) {
//       ultimoPontoFechado.horasDeServico = PontoController.calcularTempoServico([ultimoPontoFechado]);
//       await ultimoPontoFechado.save();
//     }

//     res.status(200).json({
//       primeiroPonto,
//       ultimoPontoFechado
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Erro interno do servidor.' });
//   }
// }



//   static async dashboardGeral(req, res) {
//     try {
//       const hoje = moment();
//       const dataHoje = hoje.format('YYYY-MM-DD');
//       const dataInicio = hoje.startOf('day').format('YYYY-MM-DD');
//       const dataFim72Horas = hoje.subtract(72, 'hours').format('YYYY-MM-DD');
//       const dataFim168Horas = hoje.subtract(72, 'hours').format('YYYY-MM-DD');

//       const pontosUltimas24Horas = await Ponto.find({
//         userId: req.params.clienteId,
//         data: { $gte: dataInicio, $lte: dataHoje },
//         tipo: 'saida'
//       });

//       const pontos72Horas = await Ponto.find({
//         userId: req.params.clienteId,
//         data: { $gte: dataFim72Horas, $lte: dataHoje },
//         tipo: 'saida'
//       });

//       const pontos168Horas = await Ponto.find({
//         userId: req.params.clienteId,
//         data: { $gte: dataFim168Horas, $lte: dataHoje },
//         tipo: 'saida'
//       });

//       const saldo24Horas = PontoController.calcularTempoServico(pontosUltimas24Horas);
//       const saldo72Horas = PontoController.calcularTempoServico(pontos72Horas);
//       const saldo168Horas = PontoController.calcularTempoServico(pontos168Horas);

//       res.status(200).json({
//         dataHoje,
//         diasSeguintes: [
//           hoje.clone().add(1, 'day').format('YYYY-MM-DD'),
//           hoje.clone().add(2, 'day').format('YYYY-MM-DD'),
//           hoje.clone().add(3, 'day').format('YYYY-MM-DD'),
//           hoje.clone().add(4, 'day').format('YYYY-MM-DD'),
//           hoje.clone().add(5, 'day').format('YYYY-MM-DD'),
//           hoje.clone().add(6, 'day').format('YYYY-MM-DD')
//         ],
//         saldo24Horas,
//         saldo72Horas,
//         saldo168Horas
//       });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Erro interno do servidor.' });
//     }
//   }

//   static calcularTempoServico(pontos) {
//     let totalSegundos = 0;

//     pontos.forEach(ponto => {
//       const horaEntrada = moment(ponto.horaEntrada, 'HH:mm:ss');
//       const horaSaida = moment(ponto.horaSaida, 'HH:mm:ss');
//       const diff = horaSaida.diff(horaEntrada, 'seconds');
//       totalSegundos += diff;
//     });

//     const horas = Math.floor(totalSegundos / 3600);
//     const minutos = Math.floor((totalSegundos % 3600) / 60);
//     const segundos = totalSegundos % 60;

//     return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
//   }



  
  
//   static async calcularHorasUltimos24Horas(req, res) {
//     const { clienteId } = req.params;
  
//     try {
//       const hoje = PontoController.getCurrentTime();
//       const dataInicio = hoje.startOf('day').format('YYYY-MM-DD');
//       const dataFim = hoje.endOf('day').format('YYYY-MM-DD');
//       const data = hoje.format('YYYY-MM-DD');
  
//       // Encontra todos os registros de ponto para este cliente na data atual
//       const pontos = await Ponto.find({
//         userId: clienteId,
//         tipo: 'saida',
//         data: { $gte: dataInicio, $lte: dataFim }
//       });
  
//       let horasPatrulhadas = 0;
  
//       pontos.forEach(ponto => {
//         // Calcula a diferença entre a hora de entrada e a hora de saída em segundos
//         const horaEntrada = moment(ponto.horaEntrada, 'HH:mm:ss');
//         const horaSaida = moment(ponto.horaSaida, 'HH:mm:ss');
//         const diff = horaSaida.diff(horaEntrada, 'seconds');
        
//         // Adiciona a diferença ao total de horas patrulhadas
//         horasPatrulhadas += diff;
//       });
  
//       // Converte o total de horas patrulhadas para o formato hh:mm:ss
//       const horas = Math.floor(horasPatrulhadas / 3600);
//       const minutos = Math.floor((horasPatrulhadas % 3600) / 60);
//       const segundos = horasPatrulhadas % 60;
//       const totalHorasPatrulhadas = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  
//       res.status(200).json({ data, totalHorasPatrulhadas });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Erro interno do servidor.' });
//     }
//   }
  
  
  
  
//   static async calcularHorasUltimas72Horas(req, res) {
//     const { clienteId } = req.params;
    
//     try {
//       const hoje = PontoController.getCurrentTime();
//       const dataInicio = hoje.clone().subtract(72, 'hours').startOf('hour').format('YYYY-MM-DD HH:mm:ss');
//       const dataFim = hoje.format('YYYY-MM-DD HH:mm:ss');
  
//       // Encontra todos os registros de ponto para este cliente nas últimas 72 horas
//       const pontos = await Ponto.find({
//         userId: clienteId,
//         data: { $gte: dataInicio, $lte: dataFim }
//       });
  
//       let horasPatrulhadas = 0;
//       const datas = [];
  
//       pontos.forEach(ponto => {
//         // Calcula a diferença entre a hora de entrada e a hora de saída em segundos
//         const horaEntrada = moment(ponto.horaEntrada, 'HH:mm:ss');
//         const horaSaida = moment(ponto.horaSaida, 'HH:mm:ss');
//         const diff = horaSaida.diff(horaEntrada, 'seconds');
        
//         // Adiciona a diferença ao total de horas patrulhadas
//         horasPatrulhadas += diff;
  
//         // Adiciona a data ao array se ainda não estiver presente
//         const data = moment(ponto.data).format('YYYY-MM-DD');
//         if (!datas.includes(data)) {
//           datas.push(data);
//         }
//       });
  
//       // Converte o total de horas patrulhadas para o formato hh:mm:ss
//       const horas = Math.floor(horasPatrulhadas / 3600);
//       const minutos = Math.floor((horasPatrulhadas % 3600) / 60);
//       const segundos = horasPatrulhadas % 60;
//       const totalHorasPatrulhadas = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  
//       res.status(200).json({ datas, totalHorasPatrulhadas });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Erro interno do servidor.' });
//     }
//   }
  
  


//   static async calcularHorasUltimas168Horas(req, res) {
//     const { clienteId } = req.params;
    
//     try {
//       const hoje = PontoController.getCurrentTime();
//       const dataInicio = hoje.clone().subtract(168, 'hours').startOf('hour').format('YYYY-MM-DD HH:mm:ss');
//       const dataFim = hoje.format('YYYY-MM-DD HH:mm:ss');
  
//       // Encontra todos os registros de ponto para este cliente nas últimas 168 horas
//       const pontos = await Ponto.find({
//         userId: clienteId,
//         data: { $gte: dataInicio, $lte: dataFim }
//       });
  
//       let horasPatrulhadas = 0;
//       const datas = [];
  
//       pontos.forEach(ponto => {
//         // Calcula a diferença entre a hora de entrada e a hora de saída em segundos
//         const horaEntrada = moment(ponto.horaEntrada, 'HH:mm:ss');
//         const horaSaida = moment(ponto.horaSaida, 'HH:mm:ss');
//         const diff = horaSaida.diff(horaEntrada, 'seconds');
        
//         // Adiciona a diferença ao total de horas patrulhadas
//         horasPatrulhadas += diff;
  
//         // Adiciona a data ao array se ainda não estiver presente
//         const data = moment(ponto.data).format('YYYY-MM-DD');
//         if (!datas.includes(data)) {
//           datas.push(data);
//         }
//       });
  
//       // Converte o total de horas patrulhadas para o formato hh:mm:ss
//       const horas = Math.floor(horasPatrulhadas / 3600);
//       const minutos = Math.floor((horasPatrulhadas % 3600) / 60);
//       const segundos = horasPatrulhadas % 60;
//       const totalHorasPatrulhadas = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  
//       res.status(200).json({ datas, totalHorasPatrulhadas });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Erro interno do servidor.' });
//     }
//   }

//   static async checarEntradaServicoHoje(req, res) {
//     const { clienteId } = req.params;
  
//     try {
//       const hoje = PontoController.getCurrentTime();
//       const data = hoje.format('YYYY-MM-DD');
  
//       // Encontra o registro de ponto para este cliente na data de hoje
//       const ponto = await Ponto.findOne({
//         userId: clienteId,
//         data,
//         tipo: 'entrada'
//       });
  
//       let patrulhou = false;
//       if (ponto) {
//         const horaEntrada = moment(ponto.horaEntrada, 'HH:mm:ss');
//         const horaAtual = hoje.clone();
//         const diff = horaAtual.diff(horaEntrada, 'hours');
  
//         if (diff >= 1) {
//           patrulhou = true;
//         }
//       }
  
//       // Salva no banco de dados
//       await Ponto.findOneAndUpdate(
//         { userId: clienteId, data },
//         { patrulhou: patrulhou ? 'true' : 'false' },
//         { upsert: true }
//       );
  
//       res.status(200).json({ data, patrulhou });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Erro interno do servidor.' });
//     }
//   }
  
  
  



// }

// module.exports = PontoController;
