function setup() {
  createCanvas(850, 500);
  frameRate(5)
}

var radio1 = 250;
var radio2 = 300;
var num1 = 40;

var radio3 = 0;

var r = 255;
var g = 257;
var b = 0;

var p1 = 50;
var p2 = 80;
var p3 = 120;

function draw() {
  background(0);
  print(frameCount);

  if (frameCount > 110) {
    radio1 = radio1 + 5;
    radio2 = radio2 + 5;
  }
  if (frameCount > 300) {
    radio1 = radio1 - 10;
    radio2 = radio2 - 10;
  }
  if (frameCount > 500) {
    radio1 = 0;
    radio2 = 0;
  }
  if (frameCount > 300) {
    p1 = 0
    p2 = 0
    p3 = 0
  }
  noStroke();
  fill(185, 95, 23);
  ellipse(650 * windowWidth / 850, 215 * windowHeight / 500, p1 * windowWidth / 850,
    p1 * windowHeight / 500);
  fill(255, 254, 170);
  ellipse(490 * windowWidth / 850, 290 * windowHeight / 500, p2 * windowWidth / 850,
    p2 * windowHeight / 500);
  fill(39, 87, 227);
  ellipse(730 * windowWidth / 850, 460 * windowHeight / 500, p3 * windowWidth / 850,
    p3 * windowHeight / 500);
  //////////////////////////////////////////////////////////////
  strokeWeight(11);
  stroke(255, 145, 0);
  fill(r, g, b);
  if (frameCount > 300) {
    r = r - 2
    g = g - 1
    b = b + 3
    stroke = noStroke;
  }
  if (frameCount > 400) {
    r = 69
    g = 168
    b = 255
  }
  push();
  translate(width * 0.8, height * 0);
  rotate(frameCount / 50);
  star(0, 0, radio1 * windowWidth / 1700, radio2 * windowHeight / 1100, num1);
  pop();

  /////////////////////////////////////////////////////////////////////////////////
  if (frameCount > 400) {
    radio3 = radio3 + 2.5;
  }
  if (radio3 >= 280) {
    radio3 = 280;
  }
  strokeWeight(3);
  stroke(176, 206, 255);
  fill(69, 168, 255);
  ellipse(width * 0.8, height * 0, radio3 * windowWidth / 850, radio3 * windowHeight / 500);
//saveCanvas("miFlipbookito" + frameCount, 'jpg');
}


//////////////////////////////////////////////////////////////
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle / 2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
////////////////////////////////////////////////////////////////