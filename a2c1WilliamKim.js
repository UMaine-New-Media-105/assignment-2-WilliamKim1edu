function setup() {
  createCanvas(400, 400);
  rectMode(CORNER);
}

function draw() {
  background(255);
  stroke("white");
  strokeWeight(1);
//background
  gridBG(0)
  gridBG(80)
  gridBG(160)
  gridBG(240)
  gridBG(320)
//letter
  gridlet1(0)
  gridlet1(160)
  gridlet1(320)
  gridlet2(80)
  gridlet2(240)
}

function gridBG(col) {
  fill ("indigo")
  rect (col, 0, 80, 80);
  rect (col, 80, 80, 80);
  rect (col, 160, 80, 80);
  rect (col, 240, 80, 80);
  rect (col, 320, 80, 80);
}

function gridlet1(col) {
  fill ("black")
  rect (col, 0, 80, 80);
  rect (col, 80, 80, 80);
  rect (col, 160, 80, 80);
  rect (col, 240, 80, 80);
}

function gridlet2(col) {
  fill ("black")
  rect (col, 320, 80, 80);
}
