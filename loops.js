// for loop
console.log('for loop')
const elements = [
    1,2,3,4,'cinco',true,false,null
]

for (let index = 0; index < elements.length;index++){
    console.log(elements[index])
}

// for each
console.log('foreach loop')
elements.forEach((value,index,array)=>{
    console.log(value,index,array)
})


// for of - iterable types -> array and strings

console.log('foreach loop')

for (let letter of 'ROBERTOO'){
    console.log(letter)
}


// for in - iterable objects
console.log("for in loop")
const person = {
    name:'goku',
    transforms:['ssj1','ssj2','ssj4'],
    currentTransform:'base',
    transform:function(){
        let nextTransform;
        const prevTransform = this.currentTransform
        do{
            nextTransform = this.transforms[Math.floor(Math.random() * 3)] 
            this.currentTransform = nextTransform;
        }
        while (this.prevTransform === nextTransform)
    }
}


for (const item in person){
    console.log(item,person[item])
}