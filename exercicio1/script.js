let coxinha = prompt("você quer uma coxinha? S/N").toUpperCase
let conta = 0

while(coxinha !== "N"){
  coxinha = prompt("você quer mais uma coxinha? S/N").toUpperCase()
  conta = conta + 2.50
}

console.log(`Valor à pagar ${conta}`)