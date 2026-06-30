let input1 = document.querySelector(".input1")
let input2 = document.querySelector(".input2")
let submit = document.querySelector(".submit")
let total = document.querySelector(".total-h1")
let money = 60000;
let thead = document.querySelector("thead")
submit.addEventListener("click", (e) => {
    e.preventDefault()
    money -= Number(input2.value);
    total.innerHTML = `Total Amount: ${money}`
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    td1.innerHTML = input1.value
    td2.innerHTML = input2.value
    let tr = document.createElement("tr")
    tr.appendChild(td1)
    tr.appendChild(td2)
    thead.appendChild(tr)
    input1.value = "";
    input2.value = "";
})