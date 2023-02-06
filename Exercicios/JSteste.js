//Aqui o script para modificar o intervalos de tempo de mudança de horarios!

let dat_ = new Date()

let hora = dat_.getHours()
//pegando as horas
// console.log(hora);

let div_con = document.querySelector('div#sub_01')
console.log(div_con);


if(hora == 0){
    div_con.innerHTML += 'mudei!'
    
}
