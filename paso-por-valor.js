// paso por valor
let x = 1;
let y = 'Hola';
let z = null;

let a = x;
let b = y;
let c = z;

console.log(x,y,z,a,b,c)


a = 12;
b = 'Platzi';
c = undefined;

console.log(x,y,z,a,b,c)

// paso por referencia
let frutas = ['manzana']
frutas.push("pera")
console.log(frutas)

let panes = ['birote']
let copiaPanes = panes;

panes.push('boliyo')
console.log(panes,copiaPanes)


// paso por referencia -> objetos

const ropa = {
    blusa:'rosa'
}


ropa.pantalon='si tiene'
/*
Al agregar una nueva propiedad se crea un objeto nuevo y se actualiza la referencia 
a la que apunta la variable ropa, despues el objeto viejo es eliminado 
por el --garbage collector-- de javascript
*/
console.log(ropa)