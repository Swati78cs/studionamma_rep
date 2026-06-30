let button = document.querySelector("button")
let h1 = document.querySelector(".h1")
let h2 = document.querySelector(".h2")
let h3 = document.querySelector(".h3")
let h4 = document.querySelector(".h4")
button.addEventListener(("click"), () =>{
    setTimeout(()=>{
        h1.textContent = "login"
    }, 1000)
    setTimeout(()=>{
        h2.textContent = "new emails"
    }, 2000)
    setTimeout(()=>{
        h3.textContent = "meeting in 10 minutes"
    }, 3000)
    setTimeout(()=>{
        h4.textContent = "new message"
    }, 4000)
})
