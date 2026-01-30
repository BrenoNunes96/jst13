const leia = require("readline-sync")

let matriz = [ [1,4,5,6], [ 12,45,67,8]]

console.log(matriz[1][2])


let matrix1 = new Array(5) // cinco conjuntos linhas 
for(let i = 0 ; i< matrix1.length;i ++){
 matrix1[i] = Array(3) // com  3 elementos dentro de cada linha

}

let array = Array.from({length:3},()=>
Array.from({length:3}, ()=> leia.questionInt('digite um numero')))


console.log(array)
