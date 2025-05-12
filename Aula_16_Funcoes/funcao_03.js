let idade = 33;
let ano_nascimento = function descubra_ano(idade) {
  resultado = 2025 - idade;
  return resultado;
};

console.log(ano_nascimento(idade));
console.log(" ");

/* ARROW FUNCTION*/

console.log("Arrow Function");

const soma_dois = (n1, n2) => n1 + n2;
console.log(soma_dois(1, 1));

const par_impar = (numero_descobrir) => {
  if (numero_descobrir % 2 == 0) {
    console.log(`O número ${numero_descobrir} é PAR`);
  } else {
    console.log(`O número ${numero_descobrir} é ÍMPAR`);
  }
};

par_impar(9);
