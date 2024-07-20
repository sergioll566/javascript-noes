const numbers = [1,2,3,4,5,6,7,8,9]
console.log(numbers)
console.log(numbers.sort((a,b)=>b-a))

// esta cool eh
/*

copy with in
toma una procion dle array y lo sobre escribe en el mismo array 
partiendo desde el indice indicado en el primer parametro


(indice de inicio,indice de inicio del segmento,indice de fin del segmento + 1)
*/
const result_copy = numbers.copyWithin(0,-3,numbers.length)
console.log(numbers)
console.log(result_copy)
