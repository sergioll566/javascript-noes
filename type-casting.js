// Explicit Type Casting

const string = "42";
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer)


const float = parseFloat(string)
console.log(float)
console.log(typeof float)

const binario = '1010'
const decimal = parseInt(binario,2)
console.log(binario,'->',decimal)


// Implicit type casting
console.log("5"+3)
console.log("5"+true)
console.log(5+true)
console.log(5 + "55")

// arriba javascript asi es que coman cola todos los lenguajes de programacion!!
// simepre que hay string concatena, cuando no, suma


//QUIZ

const numero = '596'
const numeroConvertido = parseInt(numero)
console.log(typeof numero)
// string
console.log(typeof numeroConvertido)
// number
