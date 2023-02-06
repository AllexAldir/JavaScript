// alert('ok')

//codigo para a mudança de horário

function carregar(){
    let div01 = document.querySelector('div#div01')
    // console.log(div01);
    
    let img = document.querySelector('img#img_')
    console.log(img);

    let div02 = document.querySelector('div#div_02')

    console.log(div02);

    //pegar a hora

    let data_ = new Date()
    let hora_ = data_.getHours()
   
    console.log(hora_);

    if(hora_ >= 0 && hora_ <12){
        //bom dia

        div01.innerHTML = 'bom dia'
        imagem.src = 'pexels-pixabay-414144_600px.jpg'


    }else if(hora_ >= 12 && hora_ <18){
        //boa tarde!
        div01.innerHTML = 'Boa tarde'
        img.src = "pexels-guillaume-hankenne-2792070_tarde_600px.jpg"
        document.body.style.background = '#C2420C'
    }else{
        //Boa noite!
        div01.innerHTML = 'Boa noite'
        img.src = 'noite_600px.jpg'//colocar o jpg como identificação de arquivo!
        document.body.style.background = '#000475'
        // alert('ok')
    }
}