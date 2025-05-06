let x, y;
let speedX, speedY;
let ballSize = 50;
let reboteSound;

function preload() {
  reboteSound = loadSound('rebote.mp3'); // Asegúrate de tener este archivo en tu carpeta
}

function setup() {
  createCanvas(600, 400);
  x = width / 2;
  y = height / 2;
  speedX = random(3, 5);
  speedY = random(3, 5);
  noStroke();
  fill(random(255), random(255), random(255));
}

function draw() {
  background(30);

  // Dibuja la pelota
  ellipse(x, y, ballSize);

  // Movimiento
  x += speedX;
  y += speedY;

  // Rebote en los bordes
  if (x < ballSize / 2 || x > width - ballSize / 2) {
    speedX *= -1;
    fill(random(255), random(255), random(255));
    if (reboteSound.isLoaded()) reboteSound.play();
  }

  if (y < ballSize / 2 || y > height - ballSize / 2) {
    speedY *= -1;
    fill(random(255), random(255), random(255));
    if (reboteSound.isLoaded()) reboteSound.play();
  }
}
