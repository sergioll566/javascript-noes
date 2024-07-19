## operadores de comparacion
```js
=== // igual que y mismo tipo de dato
!=== // NO igual que y mismo tipo de dato

```
## operadores logicos
```js
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
```


## condicionales  - ternarias
Son expresiones simples de una condicional if  - else
las cuales funcionan evaluando una condicion y retornando un dato de pendiendo del resultado.

```js
const resultado  = true === true ? "Esto retorna si es true": "Esto retorna si es false"

```
Las ternarias no reemplazan a los if y else por defecto, las ternarias se usan para validaciones simples aunque si es posible hacer mas y mas complejo una expresion ternaria aunque no es recomendado ya que no seria facil de leer para otro developer.


## funciones

### contextos
* Por defecto toda traditonal function tiene como contexto el contexto global (window,global)

* Las funciones flechas no tienen contexto global.
* Las funciones flecha si tienen contexto heredado
