let num = [1,2,5]
// console.log(num[2] - 1) // aqui nesse caso ele pega o valor do indice - o incremento que determinei!

//Aprendendo como utilizar vetores!
num[3] = 45
num[4] = 98
num.push(90)
num[6] = 5
num.sort()
console.log(num)
//  colocando sempre na primeira posição!
console.log(`O vetor tem: ${num.length} posições!`)
console.log(`O valor da posição: 1 é ${num[6]}`)

//com estruturas de repetição!

let cond = 0
/*
for(num ; cond < num.length ; cond++){
    console.log(num[cond])

}
*/
/*
for(let pos in num){
    console.log(`A posição ${pos} recebe o valor: ${num}`)
}

*/

console.log(`O valor da minha posiçao 4 é ${num.indexOf(98)}`)
//se retornar o valor -1 quer dizer que não possui esse indice!