const owner = 'Lucy'
const addres = 'Avenue 123'
// binding contexts
function dogGreeting (owner,addres){
    console.log(`hi, i'm ${this.dogName} my owner is ${owner} my addres is ${addres}`);
}

const newHouse = {
    dogName:'Coconut'
}
const necessaryValues = [owner,addres]
dogGreeting.call(newHouse,owner,addres)
dogGreeting.call(newHouse,...necessaryValues)

// other way to get the same result
dogGreeting.apply(newHouse,necessaryValues)

// other way to get the same result
const bindingFunction = dogGreeting.bind(newHouse)
bindingFunction(owner,addres)
newHouse.dogName = "miguel"
bindingFunction(owner,addres)
