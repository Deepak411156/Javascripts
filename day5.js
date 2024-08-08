//Map 

const people =[
    {
        firstName : "Deepak",
        lastName : "Bhatta",
    },
    {
        firstName : "Harish",
        lastName : "Bhatta"
    }
]

const data = people.map(function(person){
    //console.log(person)

   return {
    ...person, //Print the past data
    // firstName : person.firstName,
    // lastName : person.lastName,
    fullName : person.firstName + " " +person.lastName
   }

})

console.log(data)



const products = [
    {
        name : "Apple",
        price : 200,
        qty : 2
    },
    {
        name : "Orange",
        price : 45,
        qty : 3
    },
    {
        name : "Mango",
        price : 120,
        qty : 5
    },
    {
        name : "PineApple",
        price : 140,
        qty : 8
    },

]

const totalPrice = products.map(function(product){

   return {
    ...product,
    totalPrice : product.price * product.qty
   }

})


console.log(totalPrice)

const nums = [1,2,3,4,5]
//output using map 1,4,9,16,25

const square = nums.map(function(number){
    return number * number
    
})

console.log(square)



const numbers = [1,2,3,4,5,6,7,8,9,10]

const even = numbers.filter(function(num){
// if(num%2==0)
// {
//     return  num
// }

return num % 2 == 0
})

console.log(even)


const books = [
    {
        title : "Mahabir Pun",
        year : 2023
    },
    {
        title : "Think like a monk",
        year : 2020
    },
    {
        title : "Think and Grow Rich",
        year : 2000
    }

]

const newBooks = books.filter(function(book){
    return book.year > 2000
})

console.log(newBooks)


const age = "30"

if(age==30)
{
    console.log("You are 30 years old")
}
else{
    console.log("You are not 30 years old")
}