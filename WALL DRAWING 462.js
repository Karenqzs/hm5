function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);
  for (var i = 10; i <= 600; i = i + 10) {
    noFill();
    strokeWeight(3);
    ellipse(200,200,i);
  }
}
