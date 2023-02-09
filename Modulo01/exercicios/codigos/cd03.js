function tabuada(){

    var num = Number(document.querySelector('input#i_num01').value)
    //pegando o valor da tabuada!
    let tab = document.querySelector('select#i_tab')

    if(num == 0){
        alert('Número incorreto por favor digite um número')
        var num = 1
    }

    let cont = 1

    tab.innerHTML = '' //antes começar a rodar o progama ele limpa

    while(cont < 11){

        let opt = document.createElement('option')

        opt.innerText = `${num} x ${cont} = ${num * cont}`

        tab.appendChild(opt)

        cont++
    }

}