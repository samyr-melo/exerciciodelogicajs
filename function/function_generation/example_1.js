function* contadorSimples() {
  yield 1;
  yield 2;
  yield 3;
}

const iterador = contadorSimples();
console.log(iterador.next().value); // 1
console.log(iterador.next().value); // 2
console.log(iterador.next().done);  // false (ainda não terminou)
console.log(iterador.next().value); // 3
console.log(iterador.next().done);  // true (acabou)