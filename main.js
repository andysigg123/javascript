alert('Olá, mundo')
function tocaSomPom(){
    document.querySelector('#som_tecla_pom')();
}
document.querySelectorAll('.tecla');
listaDeTecla[0].onclick = tocaSomPom;
const listaDeTecla = document.querySelectorAll('.tecla');
listaDeTecla[0].onclick = tocaSomPom;
let contador = 0;
//Estrutura de repetição - Enquanto
while(contador < listaDeTecla.length) {
listaDeTecla[contador].onclick = tocaSomPom;

contador = contador + 1;
}