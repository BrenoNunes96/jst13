const leia = require("readline-sync")

const BancoSalarial = ()=>{
let salario = leia.questionFloat("digite seu salario")
console.log(salario)
let abono = leia.questionFloat("digite seu abono")
console.log(abono)
let salarioNovo = salario + abono;
console.log(salarioNovo)



}
BancoSalarial()


let salario = leia.questionFloat("digite seu salario")
console.log(salario)
let bonus = leia.questionFloat("digite seu bonus")
console.log(bonus)
let salN = salario + bonus;
console.log(salN)







function media (){
let notaPrimeira = leia.questionFloat('digite a nota 1')
let notaSegunda = leia.questionFloat('digite a nota 2')
let notaTerceira = leia.questionFloat('digite a nota 3')
let notaQuarta = leia.questionFloat('digite a nota 4')
const media = parseInt((notaPrimeira + notaSegunda + notaTerceira + notaQuarta) / 4)
console.log(media)


}
media()


const salarioLiquido  = ()=>{
let salarioBruto = leia.questionFloat("qual é o seu salario bruto ?")
let adicionalNorturno = leia.questionFloat("adicional norturno")
let horasExtras = leia.questionFloat("horas extras")
let desconto = leia.questionFloat('desconto')

const salarioLiquido = salarioBruto + adicionalNorturno + (horasExtras * 5) - desconto
console.log(salarioLiquido)

}
salarioLiquido()


const Numeros = ()=>{
// CALCULO = (n1 * n2) – (n3 * n4)
let n1 = leia.questionFloat('numero um')
let n2 = leia.questionFloat('numero dois')
let n3 = leia.questionFloat('numero tres')
let n4 = leia.questionFloat('numero quatro')

const calculo = n1 * n2 - n3 * n4;
console.log(calculo)
}
Numeros()