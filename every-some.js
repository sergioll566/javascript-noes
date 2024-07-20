const ages = [10,25,22,30,18]
// every
/*
Retorna un booleano si todos lo items cumplen una condicion
*/
const everyIsOlder = ages.every(value=>value>=18);
console.log(everyIsOlder);


// some
/*
Retorna un booleano si alguno de los items cumplen una condicion
*/
const someIsOlder = ages.some(value=>value>=18);
console.log(someIsOlder);