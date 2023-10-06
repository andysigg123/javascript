function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTecla = document.querySelectorAll('.tecla');

//para
for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla =  listaDeTecla[contador];
const intrumento = tecla.classList[1];
const idAudio = `Som_${intrumento}`;

tecla.onclick = function (){
    tocaSom(idAudio);
}

tecla.onkeydown = function (evento){
    
}

document.querySelectorAll('.tecla');
listaDeTecla[0].onclick = tocaSom;

listaDeTecla[0].onclick = tocaSomPom;
let contador = 0;
//Estrutura de repetição - Enquanto
while(contador < listaDeTecla.length) {
listaDeTecla[contador].onclick = tocaSomPom;

contador = contador + 1; 
console.log(contador);
}