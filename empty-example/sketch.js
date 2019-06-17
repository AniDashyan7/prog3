// var speed = 10;
// var  circleX = 0;
// var side = 50;


// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   frameRate(50);
//   noStroke();
  
// }

// function draw() {
//   // background(0);
//   // var distance_left = random(100);
//   // strokeWeight(100);
//   // stroke(random(255));
//   // line(distance_left,0,distance_left,height);
  
//   background("#1BB1F5");
//   ellipse(circleX,side, side, side);
//   circleX =  circleX + speed;

//   if(circleX >= width){
//     fill(random(255),random(255),random(255));
//     speed = -speed;
//     side *= 2;
//   } 

// Example 13

//   else if(circleX <= 0){
//     fill(random(255),random(255),random(255));
//     speed = -speed;
//   }
// }



// var side = 100;
// // initial position for our circle
// var circleX = 300;
// var circleY = 20;
// // how much to move the circle on each frame
// var speedX = 2;
// var speedY = -2;

// function setup() {
//   createCanvas(windowWidth,windowHeight);
//   noStroke();
//   fill("#D60DFF");
// }
// function draw() {
//   background("#21EA73");
//   ellipse(circleX, circleY, side, side);
//   circleX = circleX + speedX;
//   circleY = circleY + speedY;
  
//   if(circleX > width) {
//     fill(random(255),random(255),random(255));
//     circleX = random(-200,200);
//     speedX = -speedX;
//     side *= 2;
   
//   }
//   if(circleY > height) {
//     fill(random(255),random(255),random(255));
//     circleY = height;
//     speedY = -speedY;
//     side /= 2;
   
//   }
//   if(circleX < 0) {
//     fill(random(255),random(255),random(255));
//     circleY = 0;
//     speedY = -speedY;
//     side /= 2;
    
//   }
//   if(circleY < 0) {
//     fill(random(255),random(255),random(255));
//     circleY = 0;
//     speedY = -speedY;
//     side *= 2;
//   }
// }



function setup(){
  createCanvas(500,500);
  noStroke();
}

function draw(){
 background("grey");
 ellipse(10,10,5,10);
 fill("white");
}