const faturamento = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
};

function calcularPercentuais(faturamentoTotal) {
    const percentuais = {};
    const totalFaturamento = Object.values(faturamentoTotal).reduce((acc, valor) => acc + valor, 0);

    for (const [estado, valor] of Object.entries(faturamentoTotal)) {
        percentuais[estado] = ((valor / totalFaturamento) * 100).toFixed(2);
    }

    return percentuais;
}

function main() {
    const percentuais = calcularPercentuais(faturamento);

    console.log("Percentual de representação de cada estado:");
    for (const [estado, percentual] of Object.entries(percentuais)) {
        console.log(`${estado}: ${percentual}%`);
    }
}

main();

  // Para ver o resultado, coloque no terminal: "node calcularPercentuais.js" //