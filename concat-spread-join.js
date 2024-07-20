const morseCode1 = ['....','---']//H O
const morseCode2 = ['.-..','.-']//L A
// no modifica el array original, se crea uno nuevo
const morseCodeCombined = morseCode1.concat(morseCode2);

console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeCombined)



// spread operator (desempaquetado)

const morseCodeCombinedBySpread = [...morseCode1,...morseCode2]
console.log(morseCodeCombinedBySpread)

// by join
const morse = morseCodeCombinedBySpread.join()// default is ','
console.log(morse)
