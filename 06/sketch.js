//Preload
function preload() {
  musik = loadSound('assets/Africa.mp3');
  nino1 = loadImage('assets/nino1.png');
  nino2 = loadImage('assets/nino2.png');
  nino3 = loadImage('assets/nino3.png');
  nino4 = loadImage('assets/nino4.png');
  nino5 = loadImage('assets/nino5.png');
  nino6 = loadImage('assets/nino6.png');
  nino7 = loadImage('assets2/nino7.png');
  nino8 = loadImage('assets2/nino8.png');
  nino9 = loadImage('assets2/nino9.png');
  nino10 = loadImage('assets2/nino10.png');
  escenario = loadImage('assets2/Escenario6.jpg');
}

//Variables
var musik;
var vol;
var vel;
var amp;
var nino1;
var miAngulo = 0;
var foto = 0;

//Setup
function setup() {
  createCanvas(600, 450);
  musik.play();
  amp = new p5.Amplitude();
  amp.setInput(musik);
  angleMode(DEGREES);
  frameRate(30);
}

//Draw
function draw() {
  //background(0);
  image(escenario, 0, 0);

  //Niño
  if (mouseIsPressed) {
    foto = foto + 0.8;
  }
  if (foto > 1 && foto < 5) {
    image(nino1, 208, 90);
  }
  if (foto > 5 && foto < 10) {
    image(nino2, 208, 90);
  }
  if (foto > 10 && foto < 15) {
    image(nino3, 208, 90);
  }
  if (foto > 15 && foto < 20) {
    image(nino4, 208, 90);
  }
  if (foto > 20 && foto < 25) {
    image(nino5, 208, 90);
  }
  if (foto > 25 && foto < 30) {
    image(nino6, 208, 90);
  }
  if (foto > 30 && foto < 35) {
    image(nino7, 208, 90);
  }
  if (foto > 35 && foto < 40) {
    image(nino8, 208, 90);
  }
  if (foto > 40 && foto < 45) {
    image(nino9, 208, 90);
  }
  if (foto > 45 && foto < 50) {
    image(nino10, 208, 90);
  }
  if (foto >= 50) {
    foto = 1;
  }

  // Amplificador
  push();
  strokeWeight(4);
  stroke(181, 174, 26);
  fill(10);
  rect(0, 0, 100, 450);
  pop();
  push();
  strokeWeight(4);
  stroke(181, 174, 26);
  fill(10);
  rect(500, 0, 100, 450);
  pop();

  var nivel = amp.getLevel();
  var diametro = map(nivel, 0, 1, 10, 500);
  fill(60);
  stroke(0);
  ellipse(50, 70, diametro, diametro);
  fill(35);
  noStroke();
  ellipse(50, 70, 20, 20)

  fill(60);
  stroke(0);
  ellipse(50, 170, diametro, diametro);
  fill(35);
  noStroke();
  ellipse(50, 170, 20, 20)

  fill(60);
  stroke(0);
  ellipse(50, 270, diametro, diametro);
  fill(35);
  noStroke();
  ellipse(50, 270, 20, 20)

  fill(60);
  stroke(0);
  ellipse(50, 370, diametro, diametro);
  fill(35);
  noStroke();
  ellipse(50, 370, 20, 20)

  // Ecualizador
  fill(0, 50, 128);
  noStroke();
  rect(510, 50, 79, 220);
  var altura1 = map(nivel, 0, 1, 0, 180);
  var altura2 = map(nivel, 0, 1, 0, 250);
  var altura3 = map(nivel, 0, 1, 0, 320);
  var altura4 = map(nivel, 0, 1, 0, 400);
  fill(255, 43, 5);
  rect(587, 78, -altura1, 20);
  fill(255, 88, 5);
  rect(587, 99, -altura2, 20);
  fill(255, 168, 5);
  rect(587, 120, -altura3, 20);
  fill(255, 240, 5);
  rect(587, 141, -altura4, 20);
  fill(255, 43, 5);
  rect(587, 225, -altura1, 20);
  fill(255, 88, 5);
  rect(587, 204, -altura2, 20);
  fill(255, 168, 5);
  rect(587, 183, -altura3, 20);
  fill(255, 240, 5);
  rect(587, 162, -altura4, 20);

  stroke(200);
  strokeWeight(1);
  line(520, 420, 580, 420);
  line(520, 400, 580, 400);
  line(520, 380, 580, 380);
  line(520, 360, 580, 360);
  noStroke();
  fill(50);
  rect(525, 415, 5, 10);
  rect(535, 395, 5, 10);
  rect(532, 375, 5, 10);
  rect(545, 355, 5, 10);

  stroke(0);
  fill(0);
  ellipse(550, 313, 70, 70);
  fill(255);
  ellipse(550, 313, 20, 20);

  push();
  translate(550, 313);
  rotate(miAngulo);
  fill(255, 0, 0);
  ellipse(15, -10, 5, 5);
  pop();
  miAngulo = miAngulo + 2

  // Mouse
  var vol = map(mouseY, height, 0, 0, 1);
  musik.setVolume(vol);

  var vel = map(mouseX, width, 0, 1.3, 0.7);
  musik.rate(vel);
  //Vinilo
  if (vel >= 1.2) {
    miAngulo = miAngulo + 5
  }
  if (vel <= 0.8) {
    miAngulo = miAngulo - 1.5
  }
  //Luces
  if (vel >= 1.2) {
    tint(random(250), random(250), random(250), 150);
  } else if (vel <= 0.8) {
    tint(108, 96, 83, 150);
  } else {
    noTint();
  }
}