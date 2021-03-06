var s;
var scl = 60;

var food;

function setup(){
  createCanvas(windowWidth,windowHeight);
  noStroke();
  s = new Snake();
  frameRate(10);
  pickLocation();
  
}

function pickLocation(){
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)),floor(random(rows)));
  food.mult(scl);
}

function mousePressed(){
  s.total++;
}

function draw(){
  background(100);

  s.die();
  s.update();
  s.show();

  if(s.eat(food)){
    pickLocation();
  };

  fill(255 , 0, 100);
  rect(food.x,food.y,scl/4,scl/4);
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    s.dir(0, -1);
  }

  else if(keyCode === DOWN_ARROW){
    s.dir(0,1);
  }

  else if(keyCode === RIGHT_ARROW){
    s.dir(1,0);
  }

  else if(keyCode === LEFT_ARROW){
    s.dir(-1,0);
  }
}

