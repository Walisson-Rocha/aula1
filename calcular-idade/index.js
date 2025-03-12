import moment from 'moment';

function calcularIdade(anoNascimento) {
  const anoAtual = moment().year();
  const idade = anoAtual - anoNascimento;
  return idade;
}

const anoNascimento = 1999;
const idade = calcularIdade(anoNascimento);
console.log(`Idade: ${idade} anos`);