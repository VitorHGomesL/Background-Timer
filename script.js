//Define a div que vai ficar o horario
let TxtTime = document.getElementById("Time")

//define para que todos os numeros tenham 2 digitos, caso seja menor que uma dezena, adiciona o 0 na frente
const zeroFill = n =>{
    return ('0' + n).slice(-2); 
}

//define o background no pc  de acordo com o horario do dia
function backgroundpc(hora){

if( hora >= 5 && hora < 7 ){
    document.body.style.backgroundImage = "url('./source/Amanhecer.gif')"
}
if( hora >= 7 &&  hora < 16){
    document.body.style.backgroundImage = "url('./source/dia.gif')"
}
if( hora >= 16 && hora < 19){
    document.body.style.backgroundImage = "url('./source/Entardecer.jpg')"
}
if(hora >= 19 || hora < 5){
    document.body.style.backgroundImage = "url('./source/noite.gif')"
}
}

//define o background no celular  de acordo com o horario do dia
function backgroundcel(hora){
    
    if( hora >= 5 && hora < 7 ){
        document.body.style.backgroundImage = "url('./source/Amanhecer.jpg')"
    }
    if( hora >= 7 &&  hora < 16){
        document.body.style.backgroundImage = "url('./source/dia.jpg')"
    }
    if( hora >= 16 && hora < 19){
        document.body.style.backgroundImage = "url('./source/Entardecercel.gif')"
    }
    if(hora >= 19 || hora < 5){
        document.body.style.backgroundImage = "url('./source/noitecel.gif')"
    }
    }

//define o background em tablets de acordo com o horario do dia
function backgroundtab(hora){
        
    if( hora >= 5 && hora < 7 ){
        document.body.style.backgroundImage = "url('./source/AmanhecerTab.jpg')"
    }
    if( hora >= 7 &&  hora < 16){
        document.body.style.backgroundImage = "url('./source/Diatab.jpg')"
    }
    if( hora >= 16 && hora < 19){
        document.body.style.backgroundImage = "url('./source/Entardecertab.jpg')"
    }
    if(hora >= 19 || hora < 5){
        document.body.style.backgroundImage = "url('./source/NoiteTab.jpg')"
    }
}

//configura o plano de fundo mais adequado para o tamanho da tela utilizando as funções anteriores
function responsive(hora){
    let width = innerWidth
    if(width > 1024){
        backgroundpc(hora)
    }
    if(width < 767){
        backgroundcel(hora)
    }
    if(width >= 767 && width <=1024){
        backgroundtab(hora)
    }
}

//exibe e atualiza o horario atual na tela(na div Time)
const interval = setInterval(() =>{
let data = new Date();
let dia = data.getUTCDate();
let mês = data.getMonth();
let ano = data.getFullYear();
let hora = data.getHours();
let minutos = data.getMinutes()
let segundos = data.getSeconds();

responsive(hora)

const fullTime = zeroFill(dia) + "/" + zeroFill(mês+1) + "/" + zeroFill(ano) + "   -   "  + zeroFill(hora) + ":" + zeroFill(minutos) + ":" + zeroFill(segundos)

TxtTime.innerHTML = fullTime
},1000 );


