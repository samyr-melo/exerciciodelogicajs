//Exercício para Resolver: Crie uma função geradora que retorne os dias da semana (Segunda a Sexta).

function* diasDaSemana() {
    yield "Segunda"
    yield "Terça"
    yield "Quarta"
    yield "Quinta"
    yield "Sexta"
}

const semana = diasDaSemana()

console.log(semana.next().value)
console.log(semana.next().value)
console.log(semana.next().value)
console.log(semana.next().value)
console.log(semana.next().value)
console.log(semana.next().done)
console.log(semana.next().done)
console.log(semana.next().done)