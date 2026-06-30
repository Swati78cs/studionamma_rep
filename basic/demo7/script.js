let btn = document.querySelector(".btn");

let colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "black",
  "cyan",
  "lime",
  "gold"
];

btn.addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomIndex];
});