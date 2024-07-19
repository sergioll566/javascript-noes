/*

OPERADORES DE COMPARACION
*/
console.log(5=='5')
console.log(5==='5') // evalua tambien el tipo de dato
console.log(5>=5)
console.log(5<=5)
console.log(5<5)
console.log(5>5)
console.log(5!=6)
console.log(5!==5)
// este tema esta relacionado con algebra realcional


/*
OPERADORES LOGICOS
*/
console.log("====operadores logicos===")
console.log("====or===")
console.log(
    10 === '10' || 5 === 5 // true 
)
console.log("====and===")
console.log(
    (10 === '10' && 5 === 5) // false
)

console.log("====or===")
console.log(
    !(10 === '10' && 5 === 5) // true
)



/*

Hace unos dias mire esta tecnica para ejecutar una funcion
en base a unos datos.
*/ 


const show_username = (username)=>console.log(username);
const get_data = ()=>({username:'undefined',status:201});

const user_data = get_data()

user_data.status === 200 && user_data.username !== undefined && show_username(user_data.username)
// me parecio interesante, hay que empezar a usarla...
