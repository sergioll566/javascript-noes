const numbers = [5,10,15,20];
console.log("find")
const result = numbers.find((number,index,obj)=>{
    return number > 10
})
console.log(result)

console.log("findIndex")
const resultIndex = numbers.findIndex((number,index,obj)=>{
    return number > 10
})
console.log(resultIndex)