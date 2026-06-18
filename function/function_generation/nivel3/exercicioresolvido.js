function* createId() {
  let id = 1;
  while(true) {
    yield id++;
  }
}


const gen_id = createId();

console.log(gen_id.next().value)
console.log(gen_id.next().value)
console.log(gen_id.next().value)
console.log(gen_id.next().value)
console.log(gen_id.next().value)
