const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function inverterString(str) {
  let resultado = '';
  for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }
  return resultado;
}

rl.question('Digite a string para inverter: ', (entrada) => {
  const resultado = inverterString(entrada);
  console.log('String invertida:', resultado);
  rl.close();
});

  // Para ver o resultado, coloque no terminal: "node inverterString.js" //