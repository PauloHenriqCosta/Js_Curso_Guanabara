function tabuada() {
  var tabuada = Number(document.getElementById("tabuada_do").value);
  var resultado = (document.getElementById("resultado").innerHTML = " ");

  for (var c = 1; c <= 10; c++) {
    var resultado = tabuada * c;
    document.getElementById(
      "resultado"
    ).innerHTML += `${tabuada} x ${c}= ${resultado}<br>`;
  }
}
