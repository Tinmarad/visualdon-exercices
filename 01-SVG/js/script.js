"use stricte";
const rect = document.querySelector("rect");
let isClicked = false;

rect.onclick = () => {
  rect.style.fill = isClicked ? "" : "blue";
  isClicked = !isClicked;
};


