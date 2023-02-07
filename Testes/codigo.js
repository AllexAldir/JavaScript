//fazendo uma function!


function mouse(){
    let sec = document.getElementsByTagName('section')[0]
    // console.log(sec);

    let img = document.createElement('img')
    
    img.setAttribute('src','Screenshot_20.png')

    if(sec.contains(img)){
        sec.remove(img)
        
    }else{
        sec.appendChild(img)
    }

    
}

