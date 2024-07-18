/*
JavaScript utiliza el 'auto-boxing'
para transformar de manera temporal y arbitraria
un dato primitivo string a un objeto String para
acceder a sus metodos y propiedades una vez finalizada la ejecucion
de los mismos el dato vuelve a ser primitivo siempre.
La unica diferencia entre string primitivo y objeto para el progamador
es la keyword 'new'
*/

// Strings primitivos
const stringPrimitivo = "primitivo";
const stringPrimitivoConMetodo = String("Soy un string primitivo")
console.log(typeof stringPrimitivo)
console.log(typeof stringPrimitivoConMetodo)

// String objeto

const stringObjeto = new String("Soy un string de tipo objeto");
console.log(typeof stringObjeto)

    // acceder a caracteres (primitivo)

const saludo = "Hola. Como estas?"
console.log(saludo[2]);
console.log(saludo.charAt(2));
console.log(saludo.indexOf('a'));
console.log(saludo.indexOf('Hola'));
console.log(saludo.lastIndexOf('a'));
// slicing
console.log(saludo.slice(0,7))
const saludoDividido = saludo.split(' ')
console.log(saludoDividido)

const saludoConEspacion = " Hola Mundo "
const saludoSinEspacio = saludoConEspacion.trim()
console.log(saludoSinEspacio)