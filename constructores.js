/*
Es Funcion constructora de objetos
*/

function Persona(nombre,apellido,edad){
    this.nombre = nombre.toUpperCase();
    this.apellido = apellido.toUpperCase();
    this.edad = edad;

}// funcion constructora

Persona.prototype.saludar =function(){ 
    console.log(`Hola! me llamo ${this.nombre}:${this.apellido}`); 
}
console.log(typeof Persona)
const sergio = new Persona(
    "sergio manuel",
    "morquecho soto",
    17
) // instancia de Persona

const lluvia = new Persona(
    'Lluvia fernanda',
    'Garcia',
    17
)
const itan = new Persona(
    'Ethan yamil',
    'Cota Camacho',
    16
)
sergio.telefono = '+526866024822'
sergio.saludar()
console.log(sergio)
console.log(lluvia)

