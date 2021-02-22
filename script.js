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
// ctx.strokeStyle = "white";
// ctx.strokeRect(0, 0, 100, 100);

const data = ctx.getImageData(0, 0, 100, 100);

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 3;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 30 + 1;
  }
  draw() {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.ard(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill;
  }
}

function init() {
  particlesArray = [];
  particlesArray.push(new Particle(50, 50));
  particlesArray.push(new Particle(80, 20));
  particlesArray.push(new Particle(70, 90));
}

init();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].draw();
  }
  requestAnimationFrame(animate);
}
