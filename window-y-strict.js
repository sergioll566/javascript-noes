/*
# LORE
El modo estricto se agrego en 2009 en Ecmascript 5
para agregar funcionalidades de seguridad a javascript
este modo se tiene que prender declarativamente.
Estas son las cosas que cambian al usar strict mode.
*/
"use strict";

// 1. Asignación a una variable no declarada
x = 10; // Lanza un ReferenceError: x is not defined

// 2. Uso de 'this' en una función no invocada como método
function showThis() {
    console.log(this); // Lanza undefined en modo estricto
}
showThis();

// 3. Parámetros duplicados en una función
function sum(a, a, c) { // Lanza un SyntaxError: Duplicate parameter name not allowed in this context
    return a + a + c;
}

// 4. Uso de 'delete' en una variable
var myVar = 20;
delete myVar; // Lanza un SyntaxError: Delete of an unqualified identifier in strict mode.

// 5. Uso de 'with'
with (Math) { // Lanza un SyntaxError: Strict mode code may not include a with statement
    console.log(cos(0));
}

// 6. Asignación a una propiedad no escribible
const obj = {};
Object.defineProperty(obj, 'prop', { value: 42, writable: false });
obj.prop = 77; // Lanza un TypeError: Cannot assign to read only property 'prop'

// 7. Uso de 'eval' como identificador
var eval = 3; // Lanza un SyntaxError: Unexpected eval or arguments in strict mode

// 8. Uso de 'arguments' como identificador
var arguments = 5; // Lanza un SyntaxError: Unexpected eval or arguments in strict mode

// 9. Uso de 'this' en un objeto
const myObject = {
    value: 42,
    getValue: function() {
        return this.value; // Esto funcionará correctamente, pero en modo no estricto, 'this' podría referirse al objeto global.
    }
};
console.log(myObject.getValue());


/*
# MAS LORE
window === global === globalThis

Son objetos de contexto global, por defecto las funciones tienen
bindeado este contexto
(algo que se quita en el modo estricto)
en el caso exclusivo de usar js en el navegador 
el contexto global especificamente es window
ya que tiene metodos y propiedades exclusivos de un 
navegador como...

document
alert
etc...
*/