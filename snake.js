var bodyX = [3, 3, 3, 3];
var bodyY = [2, 3, 4, 5];
var snakeLength = 4;

var GRIDSIZE = 15;

var foodX = 10;
var foodY = 10;

// create score element to display
var score;
var scoreVal = 0;

var direction = "right";

var cor;
function setup() {
  score = createDiv('Score = 0');
  score.position(12, 12);
  //score.id = 'score';
  score.style('color', 'white');
  // cor = createDiv('CorX: ' + bodyX[0], " " + 'CorY: ' + bodyY[0]);
 // cor.position(12, 25);
 // cor.style('color', 'white');
  createCanvas(405, 405);
  frameRate(5);
}

function draw() {
  background(0);

  // handle motion?
  var oldX = bodyX[0];
  var oldY = bodyY[0];
  var newX = oldX;
  var newY = oldY;

  if (direction == "right") {
    newX = oldX + 1;
  }
  if (direction == "left") {
    newX = oldX - 1;
  }
  if (direction == "down") {
    newY = oldY + 1;
  }
  if (direction == "up") {
    newY = oldY - 1
  }

  // add new element to the array & return the length of the array
  bodyX.unshift(newX);
  bodyY.unshift(newY);

  // make sure snake isn't too long
  bodyX = bodyX.slice(0, snakeLength);
  bodyY = bodyY.slice(0, snakeLength);

  // is head on the food?
  if (bodyX[0] == foodX && bodyY[0] == foodY) {
    snakeLength = snakeLength + 1;
  scoreVal = scoreVal + 1;
  score.html('score = ' + scoreVal);
    frameRate(frameRate() + 1);
    placeFood();
  }

  // draw snake
  noStroke();
  fill(255);
  for (var i = 0; i < bodyX.length; i = i + 1) {
    rect(bodyX[i] * GRIDSIZE, bodyY[i] * GRIDSIZE, GRIDSIZE, GRIDSIZE);
  }

  // draw food
  fill(255, 0, 0);
  rect(foodX * GRIDSIZE, foodY * GRIDSIZE, GRIDSIZE, GRIDSIZE);


 if (bodyX[0] > 30 || bodyX[bodyX.length-1] < 0 ||
   bodyY[0] > 30 || bodyY[bodyY.length-1] < 0 ||
   checkSnakeCollision() ) {
   // cor.html("CorX: " + bodyX[0] + " " + "CorY: " + bodyY[0])
      background(0, 90);
      fill(255);
      textSize(96);
    score.html('Good Game! Your score was : ' + scoreVal);
      text("GAME", width/2-textWidth("GAME")/2, height/2-25);
      text("OVER", width/2-textWidth("OVER")/2, height/2+75);
      noLoop();
    }

}

function checkSnakeCollision() {
  var snakeHeadX = bodyX[0];
  var snakeHeadY = bodyY[0];
  for (var i = 1; i < bodyX.length; i++) {
    if (bodyX[i] === snakeHeadX && bodyY[i] === snakeHeadY) {
      return true;
    }
  }
}

function placeFood() {
  // pick new x and y coordinates
  foodX = floor(random(width/GRIDSIZE));
  foodY = floor(random(height/GRIDSIZE));

  for (var i = 0; i < bodyX.length; i = i + 1) {

    if (foodX == bodyX[i] && foodY == bodyY[i]) {

      return placeFood();
    }
  }
}


//
function keyPressed() {
  if (keyCode == DOWN_ARROW) {
    direction = "down";
  }
  if (keyCode == UP_ARROW) {
    direction = "up";
  }
  if (keyCode == LEFT_ARROW) {
    direction = "left";
  }
  if (keyCode == RIGHT_ARROW) {
    direction = "right";
  }
}
