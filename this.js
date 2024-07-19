// enlace implicito - implicit binding
const house = {
    dogName : 'Angela',
    dogGreeting:function(){
        console.log(`Hi, I'm ${this.dogName}`);
    }
}

house.dogGreeting()

function test(){
    console.log(this.name)
    this.name = "goku"+1
    return this.name;
}
test()
test()
test()

// explicit binding
function dogGreeting (this_owner){
    console.log(`Hi,I'm ${this.name} and my owner is ${this_owner}`);
}


const otherHouse = {
    name:'pepe',
    age:2
}
const owner = "Gio mustard"
dogGreeting.call(otherHouse,owner)