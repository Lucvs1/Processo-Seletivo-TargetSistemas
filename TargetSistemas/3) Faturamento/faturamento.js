const fs = require('fs');


function processFaturamento(filePath) {
    const data = fs.readFileSync(filePath, 'utf8');
    const faturamentos = JSON.parse(data);
    
    let menorFaturamento = Infinity;
    let maiorFaturamento = -Infinity;
    let somaFaturamento = 0;
    let diasComFaturamento = 0;

    faturamentos.forEach(entry => {
        const { faturamento } = entry;
        if (faturamento > 0) {
            if (faturamento < menorFaturamento) menorFaturamento = faturamento;
            if (faturamento > maiorFaturamento) maiorFaturamento = faturamento;
            somaFaturamento += faturamento;
            diasComFaturamento++;
        }
    });

    const mediaFaturamento = somaFaturamento / diasComFaturamento;

    let diasAcimaDaMedia = 0;
    faturamentos.forEach(entry => {
        const { faturamento } = entry;
        if (faturamento > mediaFaturamento) {
            diasAcimaDaMedia++;
        }
    });

    console.log(`Menor valor de faturamento: ${menorFaturamento}`);
    console.log(`Maior valor de faturamento: ${maiorFaturamento}`);
    console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
}

processFaturamento('faturamento.json');

  // Para ver o resultado, coloque no terminal: "node faturamento.js" //