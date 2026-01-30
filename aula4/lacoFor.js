const leia = require("readline-sync")

const usuarioIdade = 18

while (usuarioIdade >= 18){

console.log('breno')
break
};

const nome = leia.question("digite seu nome")

for( let i = 0; i<=10;i++){

console.log(`o nome do usuario é ${nome}`)


}

let array2= Array(5)
for (let i = 0 ;i< array2.length;i++){

array2[i]= leia.question("digite uma cor");
console.log(array2[i])
}
console.log(array2)
