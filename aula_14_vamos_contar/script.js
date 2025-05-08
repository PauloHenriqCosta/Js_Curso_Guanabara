function contador() {
  var inicio = Number(document.getElementById("numero_enviado").value);
  var fim = Number(document.getElementById("numero_final").value);
  var passo = Number(document.getElementById("passo").value);

  var resultado = (document.getElementById("resultado").innerHTML = " ");

  for (var c = inicio; c <= fim; c += passo) {
    document.getElementById("resultado").innerHTML += `👉 ${c} `;
  }

  document.getElementById("resultado").innerHTML += `🚩FIM`;
}

/* unicode emoji list (google) || teste de vazio || lógica para fazer regressivo (se início>final) */
