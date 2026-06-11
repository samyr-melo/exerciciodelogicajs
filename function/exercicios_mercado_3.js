// Exercício 3: Formatação de Resumo de Carrinho (Misturando os conceitos)
// Tarefa A: Crie uma Declaração de Função chamada calcularTotal que recebe uma lista de números (array) e retorna a soma de todos eles.

// Tarefa B: Crie uma Arrow Function chamada gerarMensagem que recebe o nome de um cliente e o valor total, retornando a string: "Cliente: [Nome] | Total: R$ [Valor]".

// Tarefa C: Execute a lógica criando um array de compras, somando com a primeira função e gerando o texto final com a segunda.

function calcularTotal(itens) {
  return itens.reduce((acc, item) => acc + item, 0);
}

const gerarMensagem = (nome, total) => `Cliente: ${nome} | Total: R$ ${total.toFixed(2)}`;

// Exemplo de uso:
const compras = [150, 400, 80, 1200, 250, 60];
const total = calcularTotal(compras);
const mensagem = gerarMensagem("João", total);
console.log(mensagem);

//o que faz o metodo reduce? Ele é usado para reduzir um array a um único valor, aplicando uma função a cada elemento do array (da esquerda para a direita) para acumular um resultado. No exemplo acima, ele está somando todos os itens do array de compras para calcular o total.

// de onde vem os paramentros acc e item? Eles são os parâmetros da função de callback que é passada para o método reduce. O parâmetro acc (abreviação de "acumulador") é o valor acumulado que é atualizado a cada iteração, enquanto item representa o elemento atual do array que está sendo processado. No exemplo, acc começa com o valor inicial de 0 (definido como segundo argumento do reduce) e é atualizado somando o valor de item a cada passo.

//a estrutura do reduce é: array.reduce((acc, item) => { /* lógica para atualizar acc */ }, valorInicial); onde o valorInicial é o valor inicial do acumulador (acc) antes de começar a iterar sobre o array. No exemplo, o valorInicial é 0, o que significa que a soma começará a partir de 0.