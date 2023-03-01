let siz = 5

let redAng1 = 190;
let redAng2 = 350;
let bluAng1 = 10;
let bluAng2 = 170;

function setup() {
  createCanvas(100*siz, 60*siz);
  rectMode(CORNER);
  ellipseMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(250);
  scale(siz);
  noStroke();
  fill("green");
  rect(0, 30, 100, 30);
  
  arcAng1=140
  arcAng2=240
  arcAng3=60
  arcAng4=320
  
  fill("black");
  arc(25, 20, 25, 25, arcAng1, arcAng1+160);
  arc(75, 20, 25, 25, arcAng2, arcAng2+160);
  arc(25, 40, 25, 25, arcAng3, arcAng3+160);
  arc(75, 40, 25, 25, arcAng4, arcAng4+160);
  
  
  addOuro(50, 30, 0.5);
}

function addOuro(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  noStroke();
  //upper serpent
  fill("red");
  arc(0, 0, 50, 50, redAng1, redAng2);
  //lower serpent
  fill("blue");
  arc(0, 0, 50, 50, bluAng1, bluAng2);
  //metal plate
  fill("silver");
  ellipse(0, 0, 40);
  //crystal outline
  fill("darkorchid");
  ellipse(0, 0, 30);
  //crystal core
  fill("indigo");
  ellipse(0, 0, 25);
  pop();
}
