function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0);
   noStroke();
  fill(250);
  
  var pto1x = 0;
  var pto2x = 10;
  var pto3x = 0;
  var pto4x = 10;
  var pto1y = -10;
  var pto2y = 0;
  var pto3y = 0;
  var pto4y = 10;
  
  for(var i = 0; i < 4; i = i + 1){
  beginShape();
    vertex(pto1x,pto1y);
    vertex(pto3x,pto3y);
    vertex(pto4x,pto4y);
    vertex(pto2x,pto2y);  
  endShape(close);
    pto1x = pto1x+20;
    pto2x = pto2x+20;
    pto3x = pto3x+20;
    pto4x = pto4x+20;
    pto1y = pto1y+20;
    pto2y = pto2y+20;
    pto3y = pto3y+20;
    pto4y = pto4y+20;}
  
  for(var i = 0; i < 4; i = i + 1){
  beginShape();
    vertex(pto1x-90,pto1y-70);
    vertex(pto3x-90,pto3y-70);
    vertex(pto4x-90,pto4y-70);
    vertex(pto2x-90,pto2y-70);  
  endShape(close);
    pto1x = pto1x+20;
    pto2x = pto2x+20;
    pto3x = pto3x+20;
    pto4x = pto4x+20;
    pto1y = pto1y+20;
    pto2y = pto2y+20;
    pto3y = pto3y+20;
    pto4y = pto4y+20;}
  
   for(var i = 0; i < 4; i = i + 1){
  beginShape();
    vertex(pto1x-130,pto1y-150);
    vertex(pto3x-130,pto3y-150);
    vertex(pto4x-130,pto4y-150);
    vertex(pto2x-130,pto2y-150);  
  endShape(close);
    pto1x = pto1x+20;
    pto2x = pto2x+20;
    pto3x = pto3x+20;
    pto4x = pto4x+20;
    pto1y = pto1y+20;
    pto2y = pto2y+20;
    pto3y = pto3y+20;
    pto4y = pto4y+20;}
  
    for(var i = 0; i < 4; i = i + 1){
  beginShape();
    vertex(pto1x-200,pto1y-240);
    vertex(pto3x-200,pto3y-240);
    vertex(pto4x-200,pto4y-240);
    vertex(pto2x-200,pto2y-240);  
  endShape(close);
    pto1x = pto1x+20;
    pto2x = pto2x+20;
    pto3x = pto3x+20;
    pto4x = pto4x+20;
    pto1y = pto1y+20;
    pto2y = pto2y+20;
    pto3y = pto3y+20;
    pto4y = pto4y+20;}
  
  for(var i = 0; i < 4; i = i + 1){
  beginShape();
    vertex(pto1x-340,pto1y-300);
    vertex(pto3x-340,pto3y-300);
    vertex(pto4x-340,pto4y-300);
    vertex(pto2x-340,pto2y-300);  
  endShape(close);
    pto1x = pto1x+20;
    pto2x = pto2x+20;
    pto3x = pto3x+20;
    pto4x = pto4x+20;
    pto1y = pto1y+20;
    pto2y = pto2y+20;
    pto3y = pto3y+20;
    pto4y = pto4y+20;}
  
  
  for(var i = 0; i < 4; i = i + 1){
  beginShape();
    vertex(pto1x-390,pto1y-330);
    vertex(pto3x-390,pto3y-330);
    vertex(pto4x-390,pto4y-330);
    vertex(pto2x-390,pto2y-330);  
  endShape(close);
    pto1x = pto1x+20;
    pto2x = pto2x+20;
    pto3x = pto3x+20;
    pto4x = pto4x+20;
    pto1y = pto1y+20;
    pto2y = pto2y+20;
    pto3y = pto3y+20;
    pto4y = pto4y+20;}
  
  beginShape();
  vertex(0,60);
  vertex(0,70);
  vertex(10,70);
  endShape(close);
   beginShape();
  vertex(0,70);
  vertex(0,80);
  vertex(10,80);
  endShape(close);
   beginShape();
  vertex(70,0);
  vertex(80,10);
  vertex(80,20);
  vertex(70,10);
  endShape(close);
    
  ///////////////////////////////////////////////////////////////////////
  
  var ver1x = 0;
  var ver2x = 10;
  var ver3x = 10;
  var ver4x = 20;
  var ver1y = 10;
  var ver2y = 10;
  var ver3y = 20;
  var ver4y = 20; 
  
  for(var i = 0; i < 4; i = i + 1){
    beginShape();
    vertex(ver1x,ver1y);
    vertex(ver3x,ver3y);
    vertex(ver4x,ver4y);
    vertex(ver2x,ver2y);  
  endShape(close);
    ver1x = ver1x+20;
    ver2x = ver2x+20;
    ver3x = ver3x+20;
    ver4x = ver4x+20;
    ver1y = ver1y+20;
    ver2y = ver2y+20;
    ver3y = ver3y+20;
    ver4y = ver4y+20;}
  
   for(var i = 0; i < 4; i = i + 1){
    beginShape();
    vertex(ver1x-70,ver1y-90);
    vertex(ver3x-70,ver3y-90);
    vertex(ver4x-70,ver4y-90);
    vertex(ver2x-70,ver2y-90);  
  endShape(close);
    ver1x = ver1x+20;
    ver2x = ver2x+20;
    ver3x = ver3x+20;
    ver4x = ver4x+20;
    ver1y = ver1y+20;
    ver2y = ver2y+20;
    ver3y = ver3y+20;
    ver4y = ver4y+20;} 
  
  for(var i = 0; i < 4; i = i + 1){
    beginShape();
    vertex(ver1x-170,ver1y-150);
    vertex(ver3x-170,ver3y-150);
    vertex(ver4x-170,ver4y-150);
    vertex(ver2x-170,ver2y-150);  
  endShape(close);
    ver1x = ver1x+20;
    ver2x = ver2x+20;
    ver3x = ver3x+20;
    ver4x = ver4x+20;
    ver1y = ver1y+20;
    ver2y = ver2y+20;
    ver3y = ver3y+20;
    ver4y = ver4y+20;} 
  
   for(var i = 0; i < 4; i = i + 1){
    beginShape();
    vertex(ver1x-200,ver1y-240);
    vertex(ver3x-200,ver3y-240);
    vertex(ver4x-200,ver4y-240);
    vertex(ver2x-200,ver2y-240);  
  endShape(close);
    ver1x = ver1x+20;
    ver2x = ver2x+20;
    ver3x = ver3x+20;
    ver4x = ver4x+20;
    ver1y = ver1y+20;
    ver2y = ver2y+20;
    ver3y = ver3y+20;
    ver4y = ver4y+20;}
  
  for(var i = 0; i < 4; i = i + 1){
    beginShape();
    vertex(ver1x-270,ver1y-330);
    vertex(ver3x-270,ver3y-330);
    vertex(ver4x-270,ver4y-330);
    vertex(ver2x-270,ver2y-330);  
  endShape(close);
    ver1x = ver1x+20;
    ver2x = ver2x+20;
    ver3x = ver3x+20;
    ver4x = ver4x+20;
    ver1y = ver1y+20;
    ver2y = ver2y+20;
    ver3y = ver3y+20;
    ver4y = ver4y+20;}
  
   for(var i = 0; i < 2; i = i + 1){
    beginShape();
    vertex(ver1x-400,ver1y-360);
    vertex(ver3x-400,ver3y-360);
    vertex(ver4x-400,ver4y-360);
    vertex(ver2x-400,ver2y-360);  
  endShape(close);
    ver1x = ver1x+20;
    ver2x = ver2x+20;
    ver3x = ver3x+20;
    ver4x = ver4x+20;
    ver1y = ver1y+20;
    ver2y = ver2y+20;
    ver3y = ver3y+20;
    ver4y = ver4y+20;}
 
  ////////////////////////////////////////////////////////////////////
  
  noStroke();
  fill(0);
  rect(80,0,80,80);
  noStroke();
  fill(0);
  rect(0,80,80,80);
  
  ////////////////////////////////////////////////////////////////////
  
  fill(250);
  var px1=80;
  var px2=90;
  var px3=90;
  var px4=80;
  var py1=70;
  var py2=60;
  var py3=70;
  var py4=80;
  
  for(var i = 0; i < 4; i = i + 1){
    beginShape();
    vertex(px1,py1);
    vertex(px2,py2);
    vertex(px3,py3);
    vertex(px4,py4);
    endShape(close);
    
    px1=px1+20;
    px2=px2+20;
    px3=px3+20;
    px4=px4+20;
    py1=py1-20;
    py2=py2-20;
    py3=py3-20;
    py4=py4-20;}
  
  for(var i = 0; i < 4; i = i + 1){
    beginShape();
    vertex(px1-80,py1+40);
    vertex(px2-80,py2+40);
    vertex(px3-80,py3+40);
    vertex(px4-80,py4+40);
    endShape(close);
    
    px1=px1+20;
    px2=px2+20;
    px3=px3+20;
    px4=px4+20;
    py1=py1-20;
    py2=py2-20;
    py3=py3-20;
    py4=py4-20;}
  
  for(var i = 0; i < 4; i = i + 1){
    beginShape();
    vertex(px1-150,py1+130);
    vertex(px2-150,py2+130);
    vertex(px3-150,py3+130);
    vertex(px4-150,py4+130);
    endShape(close);
    
    px1=px1+20;
    px2=px2+20;
    px3=px3+20;
    px4=px4+20;
    py1=py1-20;
    py2=py2-20;
    py3=py3-20;
    py4=py4-20;}
  
  for(var i = 0; i < 4; i = i + 1){
    beginShape();
    vertex(px1-230,py1+250);
    vertex(px2-230,py2+250);
    vertex(px3-230,py3+250);
    vertex(px4-230,py4+250);
    endShape(close);
    
    px1=px1+20;
    px2=px2+20;
    px3=px3+20;
    px4=px4+20;
    py1=py1-20;
    py2=py2-20;
    py3=py3-20;
    py4=py4-20;}
  
  for(var i = 0; i < 4; i = i + 1){
    beginShape();
    vertex(px1-280,py1+320);
    vertex(px2-280,py2+320);
    vertex(px3-280,py3+320);
    vertex(px4-280,py4+320);
    endShape(close);
    
    px1=px1+20;
    px2=px2+20;
    px3=px3+20;
    px4=px4+20;
    py1=py1-20;
    py2=py2-20;
    py3=py3-20;
    py4=py4-20;}
  
   for(var i = 0; i < 4; i = i + 1){
    beginShape();
    vertex(px1-350,py1+410);
    vertex(px2-350,py2+410);
    vertex(px3-350,py3+410);
    vertex(px4-350,py4+410);
    endShape(close);
    
    px1=px1+20;
    px2=px2+20;
    px3=px3+20;
    px4=px4+20;
    py1=py1-20;
    py2=py2-20;
    py3=py3-20;
    py4=py4-20;}
  
  ////////////////////////////////////////////////////////////////////
  
  var vx1=80;
  var vx2=90;
  var vx3=100;
  var vx4=90;
  var vy1=60;
  var vy2=50;
  var vy3=50;
  var vy4=60;
  
  for(var i = 0; i < 4; i = i + 1){
    beginShape();
    vertex(vx1,vy1);
    vertex(vx2,vy2);
    vertex(vx3,vy3);
    vertex(vx4,vy4);
    endShape(close);
    
    vx1=vx1+20;
    vx2=vx2+20;
    vx3=vx3+20;
    vx4=vx4+20;
    vy1=vy1-20;
    vy2=vy2-20;
    vy3=vy3-20;
    vy4=vy4-20;}
  
  for(var i = 0; i < 4; i = i + 1){
    beginShape();
    vertex(vx1-70,vy1+50);
    vertex(vx2-70,vy2+50);
    vertex(vx3-70,vy3+50);
    vertex(vx4-70,vy4+50);
    endShape(close);
    
    vx1=vx1+20;
    vx2=vx2+20;
    vx3=vx3+20;
    vx4=vx4+20;
    vy1=vy1-20;
    vy2=vy2-20;
    vy3=vy3-20;
    vy4=vy4-20;}
  
    for(var i = 0; i < 4; i = i + 1){
    beginShape();
    vertex(vx1-150,vy1+170);
    vertex(vx2-150,vy2+170);
    vertex(vx3-150,vy3+170);
    vertex(vx4-150,vy4+170);
    endShape(close);
    
    vx1=vx1+20;
    vx2=vx2+20;
    vx3=vx3+20;
    vx4=vx4+20;
    vy1=vy1-20;
    vy2=vy2-20;
    vy3=vy3-20;
    vy4=vy4-20;}
  
   for(var i = 0; i < 4; i = i + 1){
    beginShape();
    vertex(vx1-220,vy1+260);
    vertex(vx2-220,vy2+260);
    vertex(vx3-220,vy3+260);
    vertex(vx4-220,vy4+260);
    endShape(close);
    
    vx1=vx1+20;
    vx2=vx2+20;
    vx3=vx3+20;
    vx4=vx4+20;
    vy1=vy1-20;
    vy2=vy2-20;
    vy3=vy3-20;
    vy4=vy4-20;}
  
  for(var i = 0; i < 4; i = i + 1){
    beginShape();
    vertex(vx1-290,vy1+350);
    vertex(vx2-290,vy2+350);
    vertex(vx3-290,vy3+350);
    vertex(vx4-290,vy4+350);
    endShape(close);
    
    vx1=vx1+20;
    vx2=vx2+20;
    vx3=vx3+20;
    vx4=vx4+20;
    vy1=vy1-20;
    vy2=vy2-20;
    vy3=vy3-20;
    vy4=vy4-20;}
  
  ////////////////////////////////////////////////////////////////////
  
  beginShape();
  vertex(80,20);
  vertex(90,10);
  vertex(100,10);
  vertex(90,20);
  endShape(close);
  beginShape();
  vertex(140,80);
  vertex(150,70);
  vertex(160,70);
  vertex(150,80);
  endShape(close);
    beginShape();
  vertex(80,0);
  vertex(90,0);
  vertex(80,10);
  endShape(close);
    beginShape();
  vertex(90,0);
  vertex(100,0);
  vertex(90,10);
  endShape(close);
   beginShape();
  vertex(80,40);
  vertex(90,40);
  vertex(80,50);
  endShape(close);
  
  fill(0);
  rect(160,0,80,80);
  rect(80,80,80,80);
  
}