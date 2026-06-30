
let box1 = document.querySelector(".box1")
let box2 = document.querySelector(".box2")
let box3 = document.querySelector(".box3")
let box4 = document.querySelector(".box4")

box1.addEventListener("click", (e)=>{
    e.preventDefault();
    document.body.style.backgroundColor = "red"
})
box2.addEventListener("click", (e)=>{
    e.preventDefault();
    document.body.style.backgroundColor = "beige"
})
box3.addEventListener("click", (e)=>{
    e.preventDefault();
    document.body.style.backgroundColor = "brown"
})
box4.addEventListener("click", (e)=>{
    e.preventDefault();
    document.body.style.backgroundColor = "blueviolet"
})
let text = document.querySelector(".text")
let type = document.querySelector(".type")
let submit = document.querySelector(".submit")
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    type.textContent = `${text.value}`
})

