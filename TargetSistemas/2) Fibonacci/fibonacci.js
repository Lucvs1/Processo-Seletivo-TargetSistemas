function pertenceFibonacci(num) {
    let a = 0, b = 1;
    while (b <= num) {
      if (b === num) return true;
      [a, b] = [b, a + b];
    }
    return false;
  }
  
  const numero = parseInt(process.argv[2]);
  
  if (isNaN(numero)) {
    console.error("Por favor, insira um número válido.");
  } else {
    const resultado = pertenceFibonacci(numero);
    console.log(`O número ${numero} ${resultado ? 'pertence' : 'não pertence'} à sequência de Fibonacci.`);
  }

  // Para ver o resultado, coloque no terminal: "node fibonnaci.js [número]" //