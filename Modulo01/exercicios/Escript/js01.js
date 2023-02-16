let l_num = []
var select = document.getElementsByTagName('select')[0]

var div_02 = document.querySelector('div#div_02')

function enviar(){
    let num = Number(document.querySelector('input#i_num').value)
    console.log(num)

    let input01 = document.querySelector('input#i_num')

    if(num <= 0 ){
        alert('Número menor que 0')
    }else if(num > 100){
        alert('Número maior que 100')
    }else{

        //Aqui coloca na array caso entre na condição!

        if(!l_num.includes(num)){
            l_num.push(num)
            // console.log(l_num)

            //Criando mecanismo de adição!

            let opt = document.createElement('option')

            opt.text = `O valor adcicionado é: ${num}`

            select.appendChild(opt)

            div_02.innerHTML = ''

            input01.value = ''
            //colocando valor 'null'
            input01.focus()
            //deixa o cursor piscando

        }else{
            let num_ = Number(prompt('Item ja possui na lista!... Adicione outro: '))
            l_num.push(num_)
            console.log(l_num)

            let opt = document.createElement('option')

            opt.text = `O valor adcicionado é: ${num}`

            select.appendChild(opt)
            div_02.innerHTML = ''

            input01.value = ''
            input01.focus()
        }
        


    }
}

function finalizar(){
    if(l_num.length == 0){
        alert('Adicione valores antes de finalizar!')

    }else{
        //Apaga as informações do conteúdo do Html
        select.innerHTML = ''   

        //Pegando o total de caracteres de números!
        let total_num = l_num.length
        
        //pegando o maior e menor número:
        let menor = l_num[0]
        let maior = l_num[0]

        for(let pos in l_num){
            if(pos > maior){
                maior = l_num[pos]
            }
            if(pos < menor){
                menor = l_num[pos]
            }
        }


        div_02.innerHTML += `<p>O valor total de números é: ${total_num}</p>`

        div_02.innerHTML += `<p>O valor maior é: ${maior}</p>`

        div_02.innerHTML += `<p>O valor menor é: ${menor}</p>`
    }
    
   
}

