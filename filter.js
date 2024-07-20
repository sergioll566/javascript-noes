const numbers = "1234567890".split("");
const evenNumbers = numbers.filter((number)=>number%2===0)

console.log(numbers)
console.log(evenNumbers)


const sum_numbers = numbers.reduce((previusValue,currectValue,index,array)=>{
    return parseInt(previusValue) + parseInt(currectValue)
})

console.log(sum_numbers)

const max_number = numbers.reduce((prev,current)=>{
    return (current > prev) ? current:prev

})
console.log(max_number)