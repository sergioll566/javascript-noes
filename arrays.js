'use strict'
// using constructor
const numbers = new Array(1,2,3,4,5,6,7,8,9)
console.log(numbers)

// array literal
const floats = [.5,.7,.8];
console.log(floats)

// accesing

console.log(numbers[0])
console.log(floats[2])


// mutability
/*

El metodo splice elimina del array un rango de elementos

y tiene implicitamente la opcion de agregar mas items despues de la 
porcion de array que se elimina 
*/
console.log(numbers.splice(
    0,// index de inicio
    3,// numero de items que eliminara despues del index de inicio 
    'true',false,null // items que agregara desde el index de inicio despues de eliminar

))// el metodo retorna un nuevo array con los items eliminados
console.log(numbers)



// inmutability

const newNumbers = numbers.concat(10,11,12) // [10,11,12]

console.log(newNumbers)
console.log(numbers) // no cambio el array original

// checking if object is an array

console.log(Array.isArray(22))
console.log(Array.isArray(numbers))

// exercise: sum of all elemenst from array


const numersArray = newNumbers.map((value)=>(
    typeof value === 'number' ? value:0
))

let sum = 0;
console.log(numersArray)
numersArray.forEach((value)=>sum+=value)
console.log(sum)