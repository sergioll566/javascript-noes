// Funciones puras
// Una funcion pura es la funcion que siempre retorna los mismos datos para los mismos parametros.

function sum (num1,num2){
    return num1 + num2;
}



// Funciones impuras
    // side - effects - estos efectos vuelven a una funcion en una funcion impura
    // esto quiere decir que la funcion puede no retornar lo mismo con los mismos parametros.
/*
1. Modificar variables globales
2. Modificar los parametros
3. Solicitudes HTTP
4. Imprimir mensajes en pantalla o consola
5. Manipular el DOM
*/
let contador = 0;

function incrementarContador (){
    console.log(this.fetch('https://google.com'))
    contador++;
    return contador; // ni pa que...
}

incrementarContador()
console.log("Contador vale:",contador)
incrementarContador()
console.log("Contador vale:",contador)
incrementarContador()
console.log("Contador vale:",contador)
