let box = document.querySelector(".box");
let button = document.querySelector(".button");
let flag = 1;
button.addEventListener("click", () => {
    if(flag){
        box.style.backgroundColor = "green";
        flag = 0;
    }
    else{
        box.style.backgroundColor = "red";
        flag = 1;
    }
});