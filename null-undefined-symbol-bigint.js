//null
const snoopy = null;
console.log(snoopy)
console.log(typeof snoopy)

// undefined
let name;
console.log(name);

// Symbol
    // Objeto con valor unico en todo el script (incluso si la description es identica)
const uniqueId = Symbol('ID');
const otherID = Symbol('ID');
console.log(uniqueId)
console.log(otherID)

console.log(uniqueId == otherID)
console.log(uniqueId === otherID)
console.log(uniqueId.toString()=== otherID.toString())

//BigInt

const granEntero = 1234567890123456789023468794368478n
const enteroNormal = 1234567890123456789023468794368478
console.log(granEntero)
console.log(enteroNormal)
console.log(granEntero == enteroNormal)