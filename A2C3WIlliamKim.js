function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  custShape(250, 250, 10, "red")
  //console.log(mouseX, mouseY);
}

function custShape(x, y, siz, col){
  push();
  noStroke();
  translate(x, y);
  scale(siz);
  fill(col);
  beginShape();
  //vertex();
  vertex(-20, -5);
  vertex(-25, -5);
  vertex(-15, -20);
  vertex(0, -25);
  vertex(15, -20);
  vertex(25, -5);
  vertex(20, -5);
  vertex(20, 5);
  vertex(25, 5);
  vertex(15, 20);
  vertex(0, 25);
  vertex(-15, 20);
  vertex(-25, 5);
  vertex(-20, 5);
  endShape(CLOSE);
  pop();
}
