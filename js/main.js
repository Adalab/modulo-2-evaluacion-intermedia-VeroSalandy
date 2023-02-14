'use strict';

/*pasos para ejecutar
1. Crear el HTML y enlazar el JS;
2. Escribir mi HTML: h1 (input, boton, parafo para pista, parafo para contador de intentos)--> boton hace cinco cosas: 1. alto/ 2.bajo/ 3. has ganado/ 4. numero estar entre 1 y 100/ 5. sumer numero de veces pulsado

3. Cojo los elementos del HTML desde JS: const a=document.querySelector(); 
4. Evento sobre le botón "prueba": btnTry.addEventListener("click", handleClickBtnTry );
5. Crea la función y programar todo.
*/


// CONSTANTES Y VARIABLES
const numberIntroducedUser = document.querySelector('.js-number-introduced-user');
const btnTry = document.querySelector('.js-btn-try');
const hints = document.querySelector('.js-hints');
const numberTries = document.querySelector('.js-number-tries');

// FUNCION

function getRandomNumber(max) { 
  return Math.ceil(Math.random() * max); 
} 
const randomNumber = getRandomNumber(100);
//console.log(randomNumber)

// FUNCION *MANEJADORA DEL EVENTO "CLICK-->HANDLECLICK" SOBRE EL BOTON "PRUEBA"
function handleClickBtnTry(event) {
    event.preventDefault();
    //console.log('working?');
    
    //getRandomNumber()
}
//EVENTOS
btnTry.addEventListener( 'click', handleClickBtnTry )