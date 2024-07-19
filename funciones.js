/*
Las funciones en javascript son un tipo de dato complejo
(complex)
como una clase la cual se instancia cuando la declaras
pero en relidad nunca se instancia ya que no se usa 'new'
*/

function suma (a,b){
    return a + b;
}
console.log(suma(3,5))

// ! declaracion de funcion
function calculateDiscountedPrice(price,discount){
    return price-( // less discount
        (price * discount) / 100) // get discount
}
console.log(calculateDiscountedPrice(
    100,// original price
    10 // percent discount
))
console.log(typeof calculateDiscountedPrice)

// Expresion de funcion
const a = function (){}

// nesting
function b (){
    function c (){}
    c();
    return c; // tambien son retornables
}



// Es posible almacenar funciones en objetos ?
const rocket = { // esto es un objeto en java script asi que son metodos
    name:'Falcon 9',
    launchMessage : function launch(){
        console.log("**fuegito**")
    }
}
rocket.launchMessage()