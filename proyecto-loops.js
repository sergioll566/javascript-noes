// el usuario tiene 3 intentos

// REQUERIMIENTOS
// * palabra oculta
// * pista de la palabra
// * usuario ingresa suposicion

// extras mios
/*
* El programa podria decirte el porcentaje de exito en la suposicion
* Podria actualizar la pantalla 
*/

const words = [
    "roberto",
    'miguel',
    'damian',
    'leti',
    'hermez',
    'artigas'
]

const wordChoice = words[Math.floor(Math.random()* (words.length-1))]

const instrucciones = (`Se ha escoguido uno de los siguientes nombres :</br>`.concat(words)+`</br>Tienes 3 intentos para adivinar cual es el nombre que escogi.</br>Si sabes el nombre escribelo o pide una pista (solo tienes una pista).`)
console.log(instrucciones)
const instrucciones_tag = document.getElementById('instrucciones')
instrucciones_tag.innerHTML = instrucciones;


const cheats = {
    'roberto':`no derrumbes puentes que despues debas cruzar.`,
    'miguel':'su jefe tiene mas antojos que una diva.',
    'damian':"no importa quien es el",
    'leti':'tiene cancer de pulmon',
    'hermez':'"La vida es una comida que se va enfriando"',
    'artigas':"se emborracho porque la guerra perdio"
}
const pista_tag = document.getElementById('pista')
function pedir_pista(){
    pista_tag.innerText = cheats[wordChoice]
}
globalThis.intentos_restantes = 3
function verificar_personaje(){
    const personaje = (document.getElementById('input-field').value)
    if (intentos_restantes===0)alert('Ya no tienes intentos')
    this.intentos_restantes--;
    alert((wordChoice.toLowerCase()===personaje) ? "Adivinaste!" : "No adivinaste intenta de nuevo >:(")
}