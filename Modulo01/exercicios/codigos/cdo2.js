function enviar() {


    let valor_ini = Number(document.querySelector('input#i_num01').value)

    console.log(valor_ini)

    let valor_passo = Number(document.querySelector('input#i_num03').value)

    console.log(valor_passo)

    let valor_fim = Number(document.querySelector('input#i_num02').value)

    var div02 = document.querySelector('div#div_02')

    if(valor_passo <= 0){
        alert('Valor do passo não pode ser 0 agora ele irá ser 1')

        valor_passo = 1
    }

    if (valor_ini == 0 || valor_fim == 0) {
        // alert('Valores menores ou iguais a 0')
        div02.innerHTML = 'Impossivel contar!'

    
    } else {

        if (valor_ini < valor_fim) {

            for (valor_ini; valor_ini <= valor_fim; valor_ini += valor_passo) {
                div02.innerHTML += `\u{1F449} ${valor_ini} `
                //valor de forma crescente!
            }

        } else {

            for (valor_ini; valor_ini >= valor_fim; valor_ini -= valor_passo) {
                div02.innerHTML += `\u{1F449} ${valor_ini} `
            }
            //valor decreceste!
            
        }

        div02.innerHTML += `\u{1F3C1}`

    }
}