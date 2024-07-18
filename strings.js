// creacion de strings '' or ""
let primeraOpcion = "Comillas dobles";
let segundaOpcion = 'Comillas simples';
let terceraOpcion = `backtips`;

// 1. concatenacion
console.log(("-"*10),"concatenacion",("-"*10))
// +
const direccion = "Villas";
const ciudad    = "Springfield";
const direccionCompleta = "Mi direccion completa es :" + direccion + ciudad;
console.log(direccionCompleta)

// ` `
const nombre = "Sergio";
const pais = 'Mexico';
const presentacion = `Hola soy ${nombre} y mi pais es ${pais}`;
console.log(presentacion)

// join()

const primeraParte = "ROBERTOOOO"
const segundaParte = "AVECES LO QUE DICE"
const terceraParte = "EL ALMA PUEDE ESTAR EN LO CIERTO"
const pensamiento = [primeraOpcion,segundaOpcion,terceraOpcion];
console.log(pensamiento.join(" - "))

// concat()
const hobbie1 = "Programar"
const hobbie2 = 'Jugar LoL'
const hobbie3 = 'Tomar agua'
const hobbie4 = "Jugar COD"
console.log("Mis hobbies son :".concat(hobbie1,hobbie2,hobbie3,hobbie4))

// Caracteres de ecape
console.log(("-"*10),"caracteres de escape",("-"*10))

// Escape alternativo
const escapeAlternativo = "I'm Software Engineer"
console.log(escapeAlternativo)

// backtip
const barraInvertida = 'I\'m Software Engineer'

// Escritura de Strings largos
console.log(("-"*10),"strings largos con backtips",("-"*10))

const poemaStringLargo = `
Que triste es pensar
que los golpes que haz de dar
nunca han sido tuyos.
`
console.log(poemaStringLargo)

