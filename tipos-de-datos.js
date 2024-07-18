// datos primitivos
// ! Los datos primitivos no son mutables.
/*
Los datos primitivos son valores simples que se almacenan directamente en la variable
tal y como son, se almacena el valor real.
(no son ningun tipo de estructura de datos pues)
*/
let numero = 123;
numero = numero + 10; // en este caso js esta creando un dato nuevo y lo guarda en la variable indicada
console.log(numero);

let esVerdadero = true;
esVerdadero = !esVerdadero;
console.log(esVerdadero)

// datos complejos (complex)
/*
Son estructuras de datos o objetos mutables directamente
*/
const usuario = {
    nombre:"Gio",
    edad:15
};
usuario.edad = 18;

let frutas = ['manzana','pera'];
frutas[0] = 'sandia'
console.log(usuario)
console.log(frutas)