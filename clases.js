class Persona{
    constructor(nombre,apellido,edad){
        this.nombre=nombre;
        this.apellido = apellido;
        this.edad = edad;
    }//constructor

    saludar(){//saludar
        console.log(
            `Hola, mi nombre es ${this.nombre} y tengo ${this.edad}`
        )
    }
}// clase

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
console.log(sergio)