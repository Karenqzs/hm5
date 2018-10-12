function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);
  rectMode(CENTER);
  noFill();

  //
  for (var x = 40; x <= 400; x = x +80) {
    for (var i= 10; i<= 50; i= i+10){
      rect(x,180,i,i);
    }
  }
}
