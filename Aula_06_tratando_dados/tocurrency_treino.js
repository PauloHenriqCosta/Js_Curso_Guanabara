//Questão 1:
//Converta o número 1234.56 para a moeda Euro (EUR), usando toLocaleString.
var moeda_1 = 1234.56;
moeda_1.toLocaleString(`pt-BR`, { style: "currency", currency: "BRL" }); //Brasil
moeda_1.toLocaleString(`de-DE`, { style: "currency", currency: "EUR" }); //UE
moeda_1;


/* Questão 2:
Converta o número 98765.43 para a moeda Dólar Canadense (CAD) usando toLocaleString.

Me mande sua resposta! */

var moeda_2=98765.43
moeda_2.toLocaleString('en-CA', {style: "currency", currency: "CAD"})


/*Questão 3:
Converta o número 2500 para a moeda Iene Japonês (JPY) usando toLocaleString. */

var moeda_3= 2500
moeda_3.toLocaleString('ja', {style:"currency", currency:"JPY"})


/*Questão 4:
Converta o número 54321.99 para a moeda Libra Esterlina (GBP) usando toLocaleString. */

var moeda_4=54321.99
moeda_4.toLocaleString('en-GB', {style:"currency", currency:"GBP"})

/* Questão 5:
Converta o número 7777.77 para a moeda Peso Mexicano (MXN) usando toLocaleString. */

var moeda_5= 7777.77
moeda_5.toLocaleString('es-MX', {style:"currency", currency:"MXN"})

moeda_5.toLocaleString('bn', {style:"currency", currency:"BTN"})

/* google: idioma e moeda do pais para toLocalString js"