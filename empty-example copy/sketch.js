function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // background(0);
  strokeWeight(5);
  stroke(random(256) , random(256) , random(256));
  line(width/2,height/2,random(width),random(width));
  circle(width/2,height/2,random(width),random(width));
  
}