const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

// handle mouse
const mouse = {
  x: null,
  y: null,
  radius: 100
};

window.addEventListener("mousemove", function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
  // console.log(mouse.x, mouse.y);
});

ctx.fillStyle = "white";
ctx.font = "30px Verdana";
ctx.fillText("A", 0, 30);
// ctx.strokeStyle = "white";
// ctx.strokeRect(0, 0, 100, 100);

const textCordinates = ctx.getImageData(0, 0, 100, 100);

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 2;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 40 + 5;
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
  update() {
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let forceDirectionX = dx / distance;
    let forceDirectionY = dy / distance;
    let maxDistance = mouse.radius;
    let force = (maxDistance - distance) / maxDistance;
    let directionX = forceDirectionX * force * this.density;
    let directionY = forceDirectionY * force * this.density;
    if (distance < mouse.radius) {
      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 10;
      }
      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy / 10;
      }
    }
  }
}

function init() {
  particlesArray = [];
  for (let i = 0; i < 1000; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    particlesArray.push(new Particle(x, y));
  }
}
function initA() {
  particlesArray = [];
  for (let y = 0, y2 = textCordinates.height; y < y2; y++) {
    for (let x = 0, x2 = textCordinates.width; x < x2; x++) {
      if (textCordinates.data[y * 4 * textCordinates.width + x * 4 + 3] > 128) {
        let positionX = x;
        let positionY = y;
        particlesArray.push(new Particle(positionX * 50, positionY * 50));
      }
    }
  }
}
// init();
console.log(particlesArray);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].draw();
    particlesArray[i].update();
  }
  requestAnimationFrame(animate);
}
animate();
