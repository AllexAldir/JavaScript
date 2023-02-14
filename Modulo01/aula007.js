//Funções!

/*
    São ações executadas assim que são chamadas ou
    em decorrência de algum evento! 
*/
 

//Função!
function parimp(num){

    if(num % 2 == 0){
        return 'Par!'

    }else{
        return 'Ímpar!'
    }

}

//Chamada

num = 12
let resposta = parimp(num)

console.log(resposta);

// console.log(typeof(resposta))

function soma(n1, n2){
    return n1 + n2
    
}

let n1 = 2
let n2 = 3

let rs = soma(n1,n2) 


console.log(rs)

/*
    function soma(n1=0 , n2=0){
        return n1 + n2

        isso quer dizer que caso não seja passado nenhum valor 
        os meus n1 e n2 valerão 0

    }

*/


//Criando funções com o valor na variável!

let v = function(x){
    return x * 2
}

console.log(v(5))

//Com fatorial

function fat(numm){

    let inicio = 1

    for(numm ; numm > 1 ; numm--){
        inicio *= numm

    }

    return inicio

    
}

console.log(fat(5))