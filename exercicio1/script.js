let desejaMais = prompt('Deseja comer mais coxinha ?\nDigite S para sim \nDigite N para não').toUpperCase()

if(desejaMais === "S" || "N"){
    console.log("respondeu corretamente")
}else{
    alert("resposta invalida")
}

let conta = 2.50

while(desejaMais === "S"){ 
    conta = conta+2.50
    desejaMais = prompt('Deseja comer mais coxinha ?\n Digite S para siim \nDigite N para não').toUpperCase()

}
alert(conta)