//objeto e array são objetos (mesma classe)

let amigo = {
  nome: "José",
  sexo: "M",
  peso: 90,
  engordar(p = 0) {
    console.log("Engordou");
    this.peso += p;
  },
};

amigo.engordar(2.5);
console.log(`${amigo.nome} pesa ${amigo.peso}kg.`);
