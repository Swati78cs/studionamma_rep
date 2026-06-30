let popup = document.querySelector(".popup")
let cross = document.querySelector(".fa-times")
setTimeout(()=>{
    popup.style.visibility = "visible"
},3000)
cross.addEventListener("click",()=>{
    popup.style.visibility = "hidden"
})

