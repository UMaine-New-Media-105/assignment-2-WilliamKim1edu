function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  beginShape();
  //vertex();
  vertex(50, 200);
  vertex(5, 200);
  vertex(100, 50);
  vertex(250, 0);
  vertex(400, 50);
  vertex(495, 200);
  vertex(455, 200);
  vertex(455, 300);
  vertex(495, 300);
  vertex(400, 450);
  vertex(250, 500);
  vertex(100, 450);
  vertex(5, 300);
  vertex(50, 300);
  endShape(CLOSE);
  //console.log(mouseX, mouseY);
}
