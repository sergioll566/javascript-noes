// traditional functions
function Rocket(name,ownMessage){
    this.name = name;
    this.launchMessage = ()=> ownMessage
}

const falcon = new Rocket('falcon','rocekt named 1')
const sepa = new Rocket('sepa la bola','rocekt named 2')
console.log(falcon.name)
console.log(falcon.launchMessage())
console.log(sepa.name)
console.log(sepa.launchMessage())
// arrow funtions
const RocketWithArrowFunctions = (name,ownMessage)=>(
    {
        name:name,
        launchMessage:function(){return ownMessage}
    }
)

const falconArrow =  RocketWithArrowFunctions('falcon','rocekt named 1 with arrow functions')
const sepaArrow =  RocketWithArrowFunctions('sepa la bola','rocekt named 2 witch arrow funtions')

console.log(falconArrow.name)
console.log(falconArrow.launchMessage())
console.log(sepaArrow.name)
console.log(sepaArrow.launchMessage())

