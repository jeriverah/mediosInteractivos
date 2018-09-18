// "Cronometro Cuántico"

  // Dejando el modo de angulo en radianes se crea este patron tan particular
  // Se deja completar un ciclo para calibrar el cronometro
  //angleMode(DEGREES);

function setup() {
  createCanvas(400, 400);
  background(0);
}

// Variables

var miSegundo;
var miMinuto;
var miHora;

var miHoraMod;
var miSegundoMod;
var miMinutoMod;

var conta1;
var conta2;
var conta3;

function draw() {

  //Asignación variables y mapeo.

  miSegundo = second();
  miMinuto = minute();
  miHora = hour();

  conta1 = second();
  conta2 = minute();
  conta3 = hour();

  miHoraMod = map(miHora, 0, 12, 0, -200)
  miSegundoMod = map(miSegundo, 0, 59, 0, -666)
  miMinutoMod = map(miMinuto, 0, 59, 0, -52)

  // Reinicio contador de seg, min, hora.

  push();
  if (conta1 >= 59) {
    noFill();
    strokeWeight(25);
    stroke(0);
    ellipse(200, 200, 320, 320)
  }
  pop();

  push();
  if (conta2 >= 59) {
    noFill();
    strokeWeight(25);
    stroke(0);
    ellipse(200, 200, 160, 160)
  }
  pop();

  push();
  if (conta3 >= 24) {
    noFill();
    strokeWeight(25);
    stroke(0);
    ellipse(200, 200, 40, 40)
  }
  pop();

  // Aparición particulas seg, min, hora.

  push();
  translate(width / 2, height / 2);
  rotate(miSegundoMod);
  fill(255, 29, 29);
  stroke(255, 0, 0);
  ellipse(0, -160, 20, 20);
  pop();

  push();
  translate(width / 2, height / 2);
  rotate(miMinutoMod);
  fill(38, 255, 87);
  stroke(0, 255, 58);
  ellipse(0, -80, 20, 20);
  pop();

  push();
  translate(width / 2, height / 2);
  rotate(miHoraMod);
  fill(34, 128, 255);
  stroke(0, 108, 255);
  ellipse(0, -20, 20, 20);
  pop();

}