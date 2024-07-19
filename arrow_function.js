// auto binding with global context in traditional functions
const greeting = function (name){
    console.log(this.name)
    this.name = name
    return `Hi, ${name}`
}
const otherFunction = function(){
    console.log("Message from other function: ",this.name)
}

greeting("morquecho")
otherFunction()
greeting("miguel")
greeting('traditional function')
console.log(this.name)


// with arrow function
const newgreeting = (name)=>{
    console.log(this)
    console.log(this.name)
    this.name = name
    return `Hi, ${name}`
}
newgreeting("morquecho")
newgreeting("miguel")
newgreeting('arrow function')


const newOtherFunction = ()=>{
    console.log("Message from new other function: ",this.name)
}
newOtherFunction()

console.log(globalThis.name)


const object = {
    taka:"tikia",
    method:function(){
        const tiki = ()=>{
            console.log(this.taka)
        }
        tiki()
    },
    method2:()=>{console.log(this.taka)}

}
object.method()
object.method2()
