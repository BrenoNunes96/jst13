
const leia = require("readline-sync")

let nome = ''
switch(nome){
case 'breno':
return console.log( `nome do usuario é  ${nome}`)
case 'julia':
    return console.log(`nome do usuario é ${nome}`)
case 'regina':
    return console.log( `nome do usuario é  ${nome}`)
default:
    console.log("nenhum usuario encontrado")
break

}


let num1  = leia.questionFloat("digite o numero ",{
limitMessage:"digite um numero float"

})
const num2  = leia.questionFloat("digite o numero ",{
limitMessage:"digite um numero float"

})
const operacao  = parseInt(leia.keyIn('digite o numero para operaçao '))
switch(operacao){
case 1:
    console.log(`${num1} + ${num2} = ${num1 + num2}   `)
    break

case 2:
    console.log( `${num1} - ${num2} = ${num1 - num2}   ` )
    break

case 3:
    console.log(`${num1} * ${num2} = ${num1 * num2} `)
break

case 4:
    console.log( `${num1} / ${num2}= ${num1 / num2}`)

    default:
     console.log("operaçao invalido")
break
}



let idade = 29

let maior 
let menor
idade > 18 ? maior = console.log('maior de idade'): menor = console.log("menor de idade")  















// exercicios condicionais

const resultadoAbc = ()=>{
let A = 0
let B  = 0
let C = 0

    for (let i = 0; i< 3; i ++){

switch(i){
case 0 :
    A = leia.questionInt("digite um numero para a soma",{
        limitMessage:"digite numero inteiro"
    })
    break

case 1:
    B = leia.questionInt("digite um numero para a soma",{
        limitMessage:"digite numero inteiro"
    })
break
case 2:
    C = leia.questionInt("digite um numero para a soma",{
        limitMessage:"digite numero inteiro"
    })

break
default:
        console.log("invalido")
        break
}
}
let somatorio = A + B
if(somatorio > C){

    return console.log(`${somatorio} é maior  que  ${C}`)
} 
else if(somatorio < C){
    return console.log(`${somatorio} é menor que  ${C}`)
}
return console.log(`${somatorio} é igual ${C}`)

}

resultadoAbc()





function imparPar (){

let numero = leia.questionInt("digite um numero")

if(!numero){
return console.log('insira um numero')

}
if(typeof numero !== 'number'){
    return console.log("insira apenas numeros")
}
console.log(numero)

if(numero % 2 === 0 && numero > 0){
return console.log("par e positivo")
}
if (numero % 2 === 0 && numero < 0){
return console.log('par e negativo')
}
if(numero % 2 === 1 ){
    return console.log('impar e positivo')
}
 if(numero % 2 === -1 ) {
    return console.log('impar e negativo')
}

}
imparPar()


const lanchonete = ()=>{

let lanches = [
{id:1,produto:'cachorroQuente',precoUnitario: 10},
{id:2,produto:'X-Salada',precoUnitario: 15},
{id:3,produto:'X-Bacon',precoUnitario: 18},
{id:4,produto:'Bauru',precoUnitario: 12},
{id:5,produto:'Refrigerante',precoUnitario: 8},
{id:6,produto:'Suco de Laranja',precoUnitario: 13},
]

const pedidoCodigo = leia.questionInt('digite o codigo do produto',{limitMessage:"digite numero inteiro"})
const quantia = leia.questionInt('digite a quantidade',{limitMessage:"digite numero inteiro"})

for( let x of lanches){
let total =  x['precoUnitario'] * quantia

switch(x['id'] === pedidoCodigo){

 case true:
   return  console.log(`Produto ${x['produto']} no Valor Total de ${total}`)

   default:
     console.log(`invalido no loop ${x['id']}`)
                       

}
}
}
lanchonete()




const funcionarios = ()=>{
 

    const funcoes = [
        {codigoCargo:1,cargo:'Gerente',Pr:10},
        {codigoCargo:2,cargo:'Vendedor',Pr:7},
        {codigoCargo:3,cargo:'Supervisor',Pr:9},
        {codigoCargo:4,cargo:'Motorista',Pr:6},
        {codigoCargo:5,cargo:'Estoquista',Pr:5},
        {codigoCargo:6,cargo:'Tecnico_de_Ti',Pr:8}
    ]

    let salario = leia.questionFloat("digite seu salario",{limitMessage:"digite em float"})
    let nomeColaborador = leia.question('Nome do colaborador')
    let cargo = leia.questionInt("cargo digite seu numero?",{limitMessage:"apenas numero inteiro"})
 


    for ( let x of funcoes){
    
    const reajuste =  x['Pr'] /100  * salario
    const NovoSalario = salario + reajuste

    switch(true){
        case cargo === x['codigoCargo']:
            return console.log(`Nome do Colaborador : ${nomeColaborador}, ${x['cargo']}, R$${NovoSalario} `)

    default:
      console.log(`invalidade no loop ${x['codigoCargo']}`)

    }



}}

funcionarios()