function Person(id,name,tiket){
    this.id = id;
    this.name = name;
    this.tiket = tiket;
}
const winniingParticipants = [
    new Person(5,"Roberto"),
    new Person(10,"Miguel"),
    new Person(15,"Damian"),
    new Person(20,"Leti"),
]
const isWinner = (searchBy,search)=>(searchBy==="id"||searchBy==='name')? winniingParticipants.find((person)=>person[searchBy]===search) : undefined
console.log(isWinner('name','Roberto'))
