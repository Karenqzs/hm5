function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);
  for (var i = 10; i <= 410; i = i + 5) {
    stroke(220);
    line(0, i, i, 0);
    line(i, 400, 400, i);
  }
}
