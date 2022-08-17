let desejaMais = prompt('Deseja comer mais coxinha ?\nDigite S para sim \nDigite N para não').toUpperCase()



let conta = 2.50
/*
while(desejaMais === "S"){ 
    conta = conta+2.50
    desejaMais = prompt('Deseja comer mais coxinha ?\n Digite S para siim \nDigite N para não').toUpperCase()

}
alert(conta)*/

while(desejaMais !== "N"){ 
    desejaMais === "S"?conta+=2.5:console.log("digito invalido");
    desejaMais = prompt('Deseja comer mais coxinha ?\n Digite S para siim \nDigite N para não').toUpperCase()
}
alert(`o valor a se pagar é ${conta}`)
