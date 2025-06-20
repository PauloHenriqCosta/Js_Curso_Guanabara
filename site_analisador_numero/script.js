let num = document.querySelector("input#fnum");
let lista = document.querySelector("select#flista");
let res = document.querySelector("div#res");
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    // -1=valor não foi encontrado na lista
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado.`;
    lista.appendChild(item);
    res.innerHTML = " ";
  } else {
    window.alert("Valor fora do intervalo ou já encontrado na lista.");
  }
  num.value = " ";
  num.focus();
}

function finalizar() {
  if (valores.length == 0) {
    window.alert("ATENÇÃO, adicione valores antes de finalizar.");
  } else {
    let tot = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;
    for (let pos in valores) {
      if (valores[pos] > maior) maior = valores[pos];
      if (valores[pos] < menor) menor = valores[pos];
    }

    //soma
    for (let pos in valores) {
      soma += valores[pos];
      if (valores[pos] > maior) maior = valores[pos];
      if (valores[pos] < menor) menor = valores[pos];
    }

    //media
    media = (soma / tot).toFixed(2);

    res.innerHTML = " ";
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    res.innerHTML += `<p>A soma de todos os valores da lista é ${soma}.</p>`;
    res.innerHTML += `<p>A média de todos os valores da lista é ${media}.</p>`;
  }
}
