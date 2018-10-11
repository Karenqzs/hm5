function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);
  for (var i = 10; i <= 390; i = i + 10) {
    stroke(220);
    line(i+200, 0, i-200, 390);
    line(100+i, 0, 100+i, 400);
    line(0, i, 390, i);
  }
}
