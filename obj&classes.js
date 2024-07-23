const persona = {
    nombre:"John",
    edad:30,
    direccion:{
        calle:"Av Insutgente 417",
        ciudad:"CDMX"
    },
    saludar(){
        console.log(`Hola mi nombre es ${this.nombre}`)
    }
}

console.log(persona)
console.log(persona.nombre)
persona.saludar()
persona.telefono = "+526866024822";
console.log(persona)
// Existe la herencia en los objetos tradicionales ??

persona.despedir = function(){
    console.log(`Adios ${this.nombre}`)
}

persona.despedir()


// eliminacion de metodos o propiedades de un objeto

delete persona.telefono;
delete persona.despedir;
console.log('-------------------')
console.log(persona)