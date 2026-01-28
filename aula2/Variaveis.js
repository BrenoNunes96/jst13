
const leia = require('readline-sync')


let salario = 20000
let bonus = 200

console.log(new Intl.NumberFormat("pt-br",{
  style:"currency",
  currency:'BRl',

}).format(salario+(bonus + salario)))

let num2 =42
let num = '42'
 --num2
 console.log(num2)

if(num !== num2){

console.log('diferente tipo e valor')

}