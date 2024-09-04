let img = document.getElementById("img");
let images = document.getElementById("images");

function getimg(src, color) {
  img.src = src;
  document.body.style.background = color;
  console.log(color);
}
