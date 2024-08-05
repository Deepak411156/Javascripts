//conditional statements

const isRaining = true

// if(isRaining){
//     console.log("Use Umbrella");
    
// }
// else{
//     console.log("Donot use Umbrella");
    
// }


//ternary operator

isRaining ?
console.log("Use Umbrella"):
console.log("Donot use Umbrella")


//short circuit

isRaining || console.log("Use Umbrella")

//Nullish Coelescing Operator
const age = 22
const result = age ?? "No age"
console.log(result)

const numbers=[1,2,3,4,5,6]
for(var i=0;i<numbers.length;i++)
{
    // console.log(numbers[i])
}

for(let number of numbers)
{
    console.log("\t"+number)
}