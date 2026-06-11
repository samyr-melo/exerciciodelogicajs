//conte de 1 a 100, mas inverta qunado chegar em 50


let contador =1
let sentido = -1
for (i=1; i<=100; i++) {
    console.log(contador);
    if(contador===50)sentido = -1;
    contador+=sentido;
}
