var stars = [];
var speed;

function setup(){
  createCanvas(windowWidth,windowHeight);

  for(var i = 0; i < 1000; i++){
    stars[i] = new Star();
  }
}

function draw(){
  speed = map(mouseX,0,width,0,20);
  background(0);
  translate(width/2,height/2);

  for(var i = 0; i < 1000; i++){
    stars[i].update();
    stars[i].show();
  }
}