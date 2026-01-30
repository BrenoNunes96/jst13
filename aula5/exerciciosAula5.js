


const leia = require("readline-sync");

let totalBackend = 0;
let totalMulheresFrontend = 0;
let totalHomensMobile40 = 0;
let totalNBinarioFullstack30 = 0;
let totalPessoas = 0;
let somaIdade = 0;
let continuar = true;

console.log("--- Pesquisa de Colaboradores ---");

while (continuar === true) {

    let idade = leia.questionInt("Digite a idade: ");

    console.log("\n1-Mulher Cis | 2-Homem Cis | 3-Nao Binario | 4-Mulher Trans | 5-Homem Trans | 6-Outros");
    let genero = leia.questionInt("Digite a identidade de genero: ");

    console.log("\n1-Backend | 2-Frontend | 3-Mobile | 4-FullStack");
    let cargo = leia.questionInt("Digite a pessoa desenvolvedora: ");

    totalPessoas++;
    somaIdade += idade;

    if (cargo === 1) {
        totalBackend++;
    }

    if ((genero === 1 || genero === 4) && cargo === 2) {
        totalMulheresFrontend++;
    }

    if ((genero === 2 || genero === 5) && cargo === 3 && idade > 40) {
        totalHomensMobile40++;
    }

    if (genero === 3 && cargo === 4 && idade < 30) {
        totalNBinarioFullstack30++;
    }

    continuar = leia.keyInYNStrict("\nDeseja continuar a leitura dos dados de um novo colaborador? ");
    console.clear();
}

console.log("\n########## RESULTADOS DA PESQUISA ##########");
console.log(`Total de pessoas desenvolvedoras Backend: ${totalBackend}`);
console.log(`Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${totalMulheresFrontend}`);
console.log(`Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${totalHomensMobile40}`);
console.log(`Total de Não Binários desenvolvedores FullStack menores de 30 anos: ${totalNBinarioFullstack30}`);
console.log(`Total de pessoas que responderam à pesquisa: ${totalPessoas}`);

if (totalPessoas > 0) {
    let mediaIdade = somaIdade / totalPessoas;
    console.log(`Média de idade das pessoas que responderam à pesquisa: ${mediaIdade.toFixed(2)}`);
} else {
    console.log("Nenhuma pessoa foi cadastrada.");
}


const leia = require("readline-sync")
function lista01 (){
let n1= leia.questionInt("numero inteiro",{limitMessage:"numero inteiro"})
let n2= leia.questionInt("numero inteiro",{limitMessage:"numero inteiro"})

if(n1 > n2 ){

return console.log('primeiro numero deve ser menor que o segundo')

}
for(let i = n1 ; i <n2; i ++){   //44 80
if( i % 3 ===0 &&  i % 2 ===0 ){
console.log(` ${i} é multiplo de ${3} e ${5}  `)

}



} 
}
lista01()
const imparPar = ()=>{
let par = []
let impar = []
for(let i = 0 ; i< 10; i++){
const numero= leia.questionInt(`digite o ${i} número:`,{limitMessage:"numeros inteiros apenas"})
if(numero % 2 === 0){
par.push(numero)
}else{
    impar.push(numero)
}


}
console.log(`total de pares é ${par.length} e o total de impares é ${impar.length}`)


}

imparPar()




function lista02_1 (){

let idade = leia.questionInt('digite uma idade',{ limitMessage:"numero inteiro"  })
let totalMaior50 = 0
let totalMenor21 = 0
while(idade > 0){
if(idade >50){
totalMaior50 ++
}
if(idade < 21){
totalMenor21++


}

idade = leia.questionInt('digite uma idade',{ limitMessage:"numero inteiro"  })




}
console.log(`Total de pessoas menores de 21 anos:${totalMenor21}

Total de pessoas maiores de 50 anos: ${totalMaior50}`)
}
lista02_1()

let numeros = 0
let numero = leia.questionInt("digite numero",{limitMessage:"inteiro"})
do {
    if(numero === 0 ){ return console.log("nao pode zero")}
numeros += numero
numero = leia.questionInt("digite numero",{limitMessage:"inteiro"})
}while(numero !==0)

    console.log(`A soma dos números positivos é:${numeros}`)







function  lista3_06 (){
let soma= 0
let quantidadeNum = 0


let num = leia.questionInt("digite o numeross",{limitMessage:"apenas numeros inteiros"})
do{
if(num % 3 === 0){
soma = soma + num
quantidadeNum ++
  

}

num = leia.questionInt("digite o numerosss",{limitMessage:"apenas numeros inteiros"})


}while(num !==0)
let total = soma / quantidadeNum;
    console.log(`A média de todos os números múltiplos de 3 é:${total}`)



}
lista3_06()



    const lista4_7 = ()=>{
    const vetor = [1,3,4,5,32,53,765,87,9,2]
    let numero = leia.questionInt("qual numero do vetor ?",{limitMessage:"numero inteiro"})

    for(let i = 0 ; i<vetor.length;i++){

    if(numero === vetor[i]){

    return console.log(`O número ${numero} está localizado na posição: ${i}`) 
    }
    else{
    console.log('Não foi encontrado1')
    }


    }


}
lista4_7()


const lista4_8 = ()=> {
    let soma = 0
    let impar = []
    let par = []
let vetor = [2,32,43,54,6,65,4,74,64,2]
for(let i = 0 ; i< vetor.length;i++){

if(i % 2 !== 0){
impar.push(vetor[i])
}
if(vetor[i] % 2 === 0){
    par.push(vetor[i])
}

soma += vetor[i]



}
let media = soma /10

for(let x of impar){
console.log(`Elementos nos índices ímpares:${x}`)
}
for(let x of par){
console.log(`Elementos nos índices par:${x}`)
}
console.log( `Soma:${soma}`)
console.log( `total:${media}`)
    
}
lista4_8()



const lista5_9 = () =>{
    let sp = 0
    let sc = 0 
    let somaPrincipal = []
    let somaSecundaria = []
let matriz = [ [1,2,3],[4,5,6],[7,8,9] ]
console.log(`Elementos da Diagonal Principal: ${[matriz[0][0],matriz[1][1],matriz[2][2]]}`)

console.log(`Elementos da Diagonal Segundaria: ${ [matriz[0][2],matriz[1][1],matriz[2][0] ]}`)

somaPrincipal.push(matriz[0][0],matriz[1][1],matriz[2][2])
somaSecundaria.push(matriz[0][2],matriz[1][1],matriz[2][0])

for( let x of somaPrincipal ){
sp +=x

}
for( let y of somaSecundaria){
    sc += y
}


console.log(`

Soma dos Elementos da Diagonal Principal: ${sp}

`)
console.log(`

Soma dos Elementos da Diagonal secundaria: ${sc}

`)    

}
lista5_9()

    const lista5_10 = ()=>{


    let notas = [  [4.0,5.0,7.0,3.0], [2.5,6.5,4.7,8.0 ],[10.0, 8.5, 9.5, 8.0 ], [9.0, 6.5, 7.6, 8.2] , [5.0, 5.0, 5.0, 6.3],[7.0, 8.0, 9.0, 8.5 ],[
    5.5, 3.5, 2.5, 1.0],[5.5, 3.5, 2.5, 1.0 ],[ 5.6, 5.8, 6.5, 7.0], [7.5, 8.5, 9.5, 10.0]] 

    let mediaalunos = []
    for (let i = 0 ; i < notas.length;i++){
        let soma = 0
        let quantidade = 0
    for ( let x = 0; x < notas[i].length;x++){
    soma += notas[i][x]
    quantidade ++

    }

   let media = soma /quantidade

    mediaalunos.push(media)


    }
    
console.log(mediaalunos)

    }
    lista5_10()