const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

// handle mouse
const mouse = {
  x: null,
  y: null,
  radius: 150
};

window.addEventListener("mousemove", function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
  console.log(mouse.x, mouse.y);
});

ctx.fillStyle = "white";
ctx.font = "30px Verdana";
ctx.fillText("A", 0, 30);
ctx.strokeStyle = "white";
ctx.strokeRect(0, 0, 100, 100);

const data = ctx.getImageData(0, 0, 100, 100);
