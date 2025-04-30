var idade = parseInt(window.prompt("Digite a sua idade:"));

var resultado;

if (idade < 16) {
  resultado = "Voto Proibido";
} else if (idade >= 16 && idade < 18) {
  resultado = "Voto Facultativo";
} else {
  resultado = "Voto Obrigatório";
}

window.alert(resultado);

//para usar ternário só duas condições (obrigatório|não obrigatório)
