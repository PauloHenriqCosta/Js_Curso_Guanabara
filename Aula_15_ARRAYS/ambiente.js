let num = [4, 5, 6, 7, 8, 12, 23, 43];

/* CODIGO TRADICIONAL > PERCURSO DE VETORES */
let posicao = 0;

for (posicao; posicao < num.length; posicao++) {
  console.log(`A posição ${posicao} tem o valor ${num[posicao]}`);
}

console.log("___________________________________________");

/* CODIGO MAIS RÁPIDO "FOR IN" ARRAYS E "OBJETOS(no js é array)" */
for (let posicao in num) {
  console.log(`A posição ${posicao} tem o valor ${num[posicao]}`);
}

console.log(num.indexOf(12));
