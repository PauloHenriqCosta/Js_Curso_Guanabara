function carregar() {
  var mensagem = window.document.getElementById("mensagem");
  var video = window.document.getElementById("video");
  var data = new Date();
  var hora = data.getHours();
  mensagem.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora < 12) {
    //manhã
    video.src = "./assets/manha.mp4";
    document.body.style.background = "rgba(94, 104, 85, 0.79)";
  } else if (hora >= 12 && hora <= 18) {
    //tarde
    video.src = "./assets/tarde.mp4";
    document.body.style.background = "#2E2C20";
  } else {
    //noite
    video.src = "./assets/noite.mp4";
    document.body.style.background = "rgb(21, 4, 66)";
  }
}
