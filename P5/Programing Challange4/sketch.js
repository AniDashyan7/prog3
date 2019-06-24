var x = 0.01;
var y = 0;
var z = 0;

var a = 10;
var b = 28;
var c = 8/3;

var points = [];
var offset;



function setup(){
  createCanvas(800,600,WEBGL);
  colorMode(HSB);


}

function draw(){
  background(0);

  var dt = 0.01;
  var dx = (a*(y-x))* dt;
  var dy = (x*(b-z) - y) * dt;
  var dz = (x*y - c*z) * dt;
  x = x + dx;
  y = y + dy;
  z = z + dz;

  points.push(createVector(x,y,z));


  translate(width/20,height/20);
  scale(5);
  stroke(255);
  noFill();

  var hu = 0;
  beginShape();
  for(var v of points){
    stroke(hu,255,255);
    vertex(v.x,v.y,v.z);
    
    hu += 0.1;
    if(hu > 255){
      hu = 0;
    }
  }
  endShape();
  
  

 
}