// // console.log(1+2)
// // console.log(1+3)
// // console.log(1+5)
// // console.log(1+4)



// //Regular function or normal function
// // parameter

// function add(a,b)//parameter (lidaixa ya magira xa vane)
// {
//     console.log(a+b)
// }

// add(1,2)//arguments (actual data pathaudaixa vane)
// add(5,4)//arguments



// //named regular function
// const add1 = function(a,b)
// {
//     console.log(a+b)
// }


// //arrow function
// const add2 = (a,b)=>{
//     console.log(a+b)
// }


// //anonymous function

// (a,b)=>{
//     console.log(a+b)
// }
// console.log(5+5)


// (()=>{
//     console.log(2+5)
// })()

// higher order function

//forEach
//map
//reduce
//filter

const numbers =[1,2,3,4,5]

//hgigher order function vane ko testo function ho jaslai 
//argument ma haile function dinu parxa.

//higher order function ma gako function lai chai call back function

numbers.forEach(function(number){
console.log(number)
})

const data = [
    {
        name : "Deepak",
        age : 30
    },
    {
        name : "Harish",
        age : 22
    }
]

data.forEach(function(object){
console.log(object)
console.log(object.name)
})



numbers.map(function(){

})

numbers.filter(function(){

})

numbers.reduce(function(){

})