let box = document.querySelector(".box")
document.addEventListener("keydown", (val) => {
    box.textContent = val.key;
})