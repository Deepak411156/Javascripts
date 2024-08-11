console.log("Bye World")

const h1 = document.querySelector('.helloworld')
// h1.textContent = "Bye World"
// const btn = document.querySelector('.btn-click')

const btn = document.getElementsByTagName('button')[0]

console.log(btn)
// btn.addEventListener('mouseover',function(){
//     h1.textContent = "Bye World"
// })

btn.addEventListener('click',function(){
    h1.textContent = "Bye World"

    h1.style.color ="red"
   let newParagraph =  document.createElement('p')

   newParagraph.textContent ="Jai Mata Di!"

   document.body.appendChild(newParagraph)
})

// btn.addEventListener('mouseout',function(){
//     h1.textContent = "Hello World"
// })