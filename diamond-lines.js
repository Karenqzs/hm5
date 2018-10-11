function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 10; i <= 200; i = i + 10) {
    line(200-i, i, 200+i, i);
  for (var l = 10; l <= 390; l = l + 10) {
    line(l, l+200, 400-l, 200+l);

  }
}
}
