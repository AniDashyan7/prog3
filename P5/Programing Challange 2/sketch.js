var angle = 0;
var b;
var sponge = [];
var next = [];
var newBoxes =[];


function setup(){
  createCanvas(windowWidth,windowHeight,WEBGL);
  b = new Box(0,0,0,200);
  sponge.push(b);

}

function mousePressed(){
  for(var i in sponge){
    newBoxes[i] = b.generate();
    next.push(newBoxes);
  }

  sponge = next;
 
  
}

function draw(){
  background(51);
  stroke(255);
  noFill();

  translate(width/30,height/30);
  rotate(angle);
  for(var i in sponge){
      sponge[i].show();
  }
  b.show();

  angle += 0.01;
}