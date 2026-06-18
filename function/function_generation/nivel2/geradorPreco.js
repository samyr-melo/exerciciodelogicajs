//Exercício para Resolver: Crie um gerador que recebe um valor de "preço" e, no próximo passo, aplica um desconto de 10% e retorna o valor final.

function* gerador_preco() {
    const preco = yield `Qual o preço?`
    yield `O preço é ${preco}`
    yield `preço com desconto: ${preco * .9}`
}

const p = gerador_preco();

console.log(p.next().value)
console.log(p.next(20).value)
console.log(p.next().value)