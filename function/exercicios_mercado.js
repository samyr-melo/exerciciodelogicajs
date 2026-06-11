// Exercício 1: Filtragem de Dados (Foco em Arrow Function)
// No desenvolvimento moderno, usamos muitas funções de array que recebem Arrow Functions menores como argumentos.

// Tarefa: Crie uma lista (array) de preços: const precos = [150, 400, 80, 1200, 250, 60];

// Tarefa: Use o método .filter() do JavaScript combinado com uma Arrow Function de linha única (retorno implícito) para gerar uma nova lista contendo apenas os preços que são maiores que 200.

// Resultado esperado no console: [400, 1200, 250]

const precos = [150, 400, 80, 1200, 250, 60];
const precosFltrados = precos.filter(preco => preco > 200);
cnosle.log(precosFltrados);

