const axios = require('axios');
const faker = require('faker-br');
const fs = require('fs');

faker.setLocale('pt_BR');

const generateRandomPolicia = () => ({
  nome: faker.name.firstName(),
  sobrenome: faker.name.lastName(),
  cpf: faker.br.cpf(),
  postoGraduacao: faker.random.arrayElement([
    'Coronel',
    'Tenente Coronel',
    'Major',
    'Capitão',
    '1º Tenente',
    '2º Tenente',
    'Aspirante a Oficial',
    'Aluno-Oficial',
    'Sub Tenente',
    '1º Sargento',
    '2º Sargento',
    '3º Sargento',
    'Cabo',
    'Soldado 1ª Classe',
    'Soldado 2ª Classe'
  ]),
  organizacao: faker.random.arrayElement([
    'Polícia Militar',
    'Polícia Civil',
    'Polícia Federal',
    'Guarda Municipal'
  ]),
  quadro: faker.random.arrayElement([
    'QPPM',
    'QPES',
    'QOPM',
  ]),
  pracas: 'praças',
  guarnicao: faker.random.arrayElement([
    'Radio Patrulha',
    'Força Tática',
    'ROTA',
    'BAEP',
    'CavPM',
    'ROTA',
    'BPRv ',
    '2° BPChq',
  ]),
  foto: faker.random.arrayElement([
    'https://static.wikia.nocookie.net/gta/images/7/70/CJ-GTASA.png/revision/latest/scale-to-width/360?cb=20170321232122&path-prefix=pt',
  ]),
  telefone: faker.phone.phoneNumber(),
  senha: faker.random.arrayElement([
    '123',
  ]),
  dataCadastro: faker.date.past(),
  status: true
});

const generate50Policiais = () => {
  const policiais = [];
  for (let i = 0; i < 50; i++) {
    policiais.push(generateRandomPolicia());
  }
  return policiais;
};

const postPoliciais = async (policiais) => {
  for (const policial of policiais) {
    try {
      console.log('Enviando policial para cadastro:', policial);
      const response = await axios.post('http://localhost:5000/cliente', policial);
      console.log('Policial cadastrado com sucesso:', response.data);
    } catch (error) {
      if (error.response) {
        console.error('Detalhes do erro:', error.response.data);
      } else {
        console.error('Erro ao cadastrar o policial:', error.message);
      }
    }
  }
};

// Gera os policiais
const policiais = generate50Policiais();

// Chama a função para realizar os posts
postPoliciais(policiais);

// Escreve os dados no arquivo
const jsonData = JSON.stringify(policiais, null, 2);
fs.writeFileSync('policiais.txt', jsonData, 'utf-8');
console.log('Dados dos policiais escritos no arquivo policiais.txt');