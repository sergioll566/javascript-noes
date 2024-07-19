'use strict'


/*
Hay que crear constructores de las supernenas
para nose la senora de platzi no es clara con que 
quiere para los proyectos o tareas...
*/


function SuperCharacter(name,habilitys,age){
    this.name = name;
    if (habilitys === undefined){
        console.log(`${name} no tiene habilidades.\n`)   
    }
    this.habilitys = habilitys
    this.age = age;
    this.showDescription = ()=>{
        console.log(`
    I am ${this.name}
    my habilitys is 
    `.concat(...this.habilitys)+` and my age is ${this.age}`)
    }
    
}

const character1 = new SuperCharacter('bellota',['super fuerza','rachos razer'],22);
const character2 = new SuperCharacter('goku',['super fuerza','onda vital'],42);
const character3 = new SuperCharacter('shrek',['es verde','da clases los domingos'],32);


for (const character of [character1,character2,character3]){
    character.showDescription();
}