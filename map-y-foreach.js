// map() itera en el array aplica una funcion y retorna un nuevo array 

const numbers = [1,2,3,4,5,6,7,8,9]
const squareNumbers = numbers.map((value,index)=>value**2)
console.log(numbers)
console.log(squareNumbers)


//foreach

const colors = ['r','g','b']
console.log(colors.forEach(color=>console.log(color)))


// exercice F to Celcius

const temperaturesInFah = [77,167,33];

temperaturesInFah.forEach((temperature,index)=>{
    console.log(`Temperature number ${index+1}`)
    console.log(5/9 * (temperature-32));
})

numbers.map((number,index,array)=>array[0]+=(index==0)?index:number)
console.log(numbers)